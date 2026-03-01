const page = document.getElementById("product-page");
const params = new URLSearchParams(window.location.search);
const productId = params.get("id") || "prod1";
const product = getProductById(productId) || products[0];

if (page) {
  const styleImages = [1, 2, 3, 4, 5, 6].map((num) => `${product.folder}/style${num}.jpg`);
  const perfectMatch = ["images/prod2/style1.jpg", "images/prod3/style1.jpg", "images/prod4/style1.jpg", "images/prod5/style1.jpg"];
  const inspiration = [
    { image: `${product.folder}/style2.jpg`, caption: "Office Style" },
    { image: `${product.folder}/style3.jpg`, caption: "Casual Street Look" },
    { image: `${product.folder}/style4.jpg`, caption: "Smart Casual Outfit" },
  ];
  const moreWays = [`${product.folder}/style5.jpg`, `${product.folder}/style6.jpg`];

  page.innerHTML = `
    <section class="product-hero">
      <div class="hero-image-wrap"><img class="hero-image" src="${product.image}" alt="${product.name}" /></div>
      <div class="hero-copy">
        <p class="eyebrow">Selected Product</p>
        <h1>${product.name}</h1>
        <p class="price">${formatPrice(product.price)}</p>
        <p class="description">A refined essential designed for elevated everyday dressing. Crafted for modern silhouettes and premium comfort.</p>
        <button class="add-btn" type="button">Add to Cart</button>
      </div>
    </section>

    ${renderCarousel("Explore Styles", "styles-carousel", styleImages)}
    ${renderCarousel("Perfect Match", "match-carousel", perfectMatch)}

    <section class="stack-section">
      <h2>Style Inspiration</h2>
      <div class="stack-grid">
        ${inspiration
          .map(
            (look) => `
            <article class="lookbook-card">
              <img src="${look.image}" alt="${look.caption}" loading="lazy" />
              <p>${look.caption}</p>
            </article>`
          )
          .join("")}
      </div>
    </section>

    <section class="stack-section">
      <h2>More Ways To Wear It</h2>
      <div class="stack-grid">
        ${moreWays.map((image) => `<article class="lookbook-card"><img src="${image}" alt="Additional styling" loading="lazy" /></article>`).join("")}
      </div>
    </section>
  `;

  initializeCarousels();
}

function renderCarousel(title, id, images) {
  return `
    <section class="carousel-section">
      <div class="carousel-head">
        <h2>${title}</h2>
        <div class="controls">
          <button type="button" class="arrow" data-target="${id}" data-dir="prev" aria-label="Previous">←</button>
          <button type="button" class="arrow" data-target="${id}" data-dir="next" aria-label="Next">→</button>
        </div>
      </div>
      <div class="carousel" id="${id}">
        <div class="carousel-track">
          ${images.map((src) => `<div class="slide"><img src="${src}" alt="Styled fashion view" loading="lazy" /></div>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function initializeCarousels() {
  const state = {};
  const buttons = document.querySelectorAll(".arrow");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.target;
      const direction = button.dataset.dir;
      const carousel = document.getElementById(id);
      if (!carousel) return;

      const track = carousel.querySelector(".carousel-track");
      const totalSlides = track.children.length;
      const visibleSlides = window.innerWidth < 900 ? 1 : 3;
      const maxIndex = Math.max(0, totalSlides - visibleSlides);

      if (state[id] === undefined) state[id] = 0;
      state[id] = direction === "next" ? Math.min(maxIndex, state[id] + 1) : Math.max(0, state[id] - 1);

      track.style.transform = `translateX(-${state[id] * (100 / visibleSlides)}%)`;
    });
  });
}
