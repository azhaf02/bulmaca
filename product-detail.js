const detailRoot = document.getElementById("product-detail-page");
const params = new URLSearchParams(window.location.search);
const productId = params.get("id") || "blue-oxford-shirt";
const selectedProduct = getProductById(productId) || fashionProducts[0];
const fallbackShirt = selectedProduct.type === "shirt" ? selectedProduct : getProductById("blue-oxford-shirt");

const state = {
  shirt: fallbackShirt,
  pant: getProductById(shirtToPantsMap[fallbackShirt.id][0]),
  style: styleVariations[0],
};

render();

function render() {
  const matchingPants = shirtToPantsMap[state.shirt.id].map(getProductById);

  detailRoot.innerHTML = `
    <section class="detail-layout">
      <img class="detail-image" src="${selectedProduct.image}" alt="${selectedProduct.name}" />
      <div>
        <p class="eyebrow">Product Detail</p>
        <h1 class="page-title">${selectedProduct.name}</h1>
        <p>${selectedProduct.description}</p>
        <h2>${formatPrice(selectedProduct.price)}</h2>
        <button class="btn-primary" type="button">Add to cart</button>
      </div>
    </section>

    <section class="virtual-preview">
      <h2>See how this outfit looks styled</h2>
      <div class="preview-stage">
        <img id="preview-image" src="${composePreviewImage(state.shirt.name, state.pant.name, state.style)}" alt="Styled outfit preview" />
      </div>

      <h3>Matching Pants Suggestions</h3>
      <div class="chip-row" id="pants-row">
        ${matchingPants
          .map(
            (pant) => `<button class="chip ${pant.id === state.pant.id ? "active" : ""}" data-pant-id="${pant.id}">${pant.name}</button>`
          )
          .join("")}
      </div>

      <h3>Style this look</h3>
      <div class="chip-row" id="styles-row">
        ${styleVariations
          .map(
            (style) => `<button class="chip ${style === state.style ? "active" : ""}" data-style="${style}">${style}</button>`
          )
          .join("")}
      </div>

      <h3>Outfit Gallery</h3>
      <div class="gallery-grid">
        ${outfitGallery
          .slice(0, 6)
          .map((item) => `<img src="${item.image}" alt="${item.title}" loading="lazy" />`)
          .join("")}
      </div>
    </section>

    <section class="section smart-match">
      <h2>Perfect Match</h2>
      <div class="match-list">
        ${renderPerfectMatchCards()}
      </div>
    </section>
  `;

  bindInteractions();
}

function bindInteractions() {
  const pantsRow = document.getElementById("pants-row");
  const stylesRow = document.getElementById("styles-row");

  pantsRow.addEventListener("click", (event) => {
    const target = event.target.closest("button[data-pant-id]");
    if (!target) return;
    state.pant = getProductById(target.dataset.pantId);
    render();
  });

  stylesRow.addEventListener("click", (event) => {
    const target = event.target.closest("button[data-style]");
    if (!target) return;
    state.style = target.dataset.style;
    render();
  });
}

function composePreviewImage(shirtName, pantName, style) {
  const query = encodeURIComponent(`${shirtName} with ${pantName}, ${style}, fashion model`);
  return `https://source.unsplash.com/1200x1400/?${query}`;
}

function renderPerfectMatchCards() {
  return Object.entries(shirtToPantsMap)
    .slice(0, 3)
    .map(([shirtId, pantIds]) => {
      const shirt = getProductById(shirtId);
      const pant = getProductById(pantIds[0]);
      return `
        <article class="match-item">
          <h3>${shirt.name}</h3>
          <p>+ ${pant.name}</p>
        </article>
      `;
    })
    .join("");
}
