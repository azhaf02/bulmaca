const featuredGrid = document.getElementById("featured-grid");
const trendingLooksEl = document.getElementById("trending-looks");
const perfectMatchList = document.getElementById("perfect-match-list");

if (featuredGrid) {
  const featured = fashionProducts.slice(0, 6);
  featuredGrid.innerHTML = featured.map(renderProductCard).join("");
}

if (trendingLooksEl) {
  trendingLooksEl.innerHTML = outfitGallery.slice(0, 6).map((look) => `
    <article class="look-card">
      <img src="${look.image}" alt="${look.title}" />
      <p>${look.title}</p>
    </article>
  `).join("");
}

if (perfectMatchList) {
  const shirts = fashionProducts.filter((product) => product.type === "shirt").slice(0, 3);
  perfectMatchList.innerHTML = shirts
    .map((shirt) => {
      const pant = getProductById(shirtToPantsMap[shirt.id][0]);
      return `
        <article class="match-item">
          <h3>${shirt.name}</h3>
          <p>+ ${pant.name}</p>
        </article>
      `;
    })
    .join("");
}

function renderProductCard(product) {
  return `
    <article class="product-card">
      <img src="${product.image}" alt="${product.name}" loading="lazy" />
      <div class="card-content">
        <h3>${product.name}</h3>
        <div class="card-row">
          <strong>${formatPrice(product.price)}</strong>
          <a class="btn-secondary" href="product.html?id=${product.id}">Quick preview</a>
        </div>
      </div>
    </article>
  `;
}
