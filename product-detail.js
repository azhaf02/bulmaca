const page = document.getElementById("product-page");
const params = new URLSearchParams(window.location.search);
const product = getProductById(params.get("id")) || products[0];

if (page) {
  const styleImages = product.styles;
  const inspirationLooks = [
    { image: product.styles[1], caption: "Casual Look" },
    { image: product.styles[2], caption: "Office Look" },
    { image: product.styles[3], caption: "Weekend Style" },
    { image: product.styles[4], caption: "Summer Outfit" },
  ];

  const matchProducts = [2, 3, 4].map((id) => getProductById(id)).filter(Boolean);
  const alsoLikeProducts = [5, 6, 7, 8].map((id) => getProductById(id)).filter(Boolean);

  page.innerHTML = `
    <section class="product-top">
      <div class="top-image-wrap">
        <img class="top-image" src="${product.styles[0]}" alt="${product.name}" />
      </div>
      <div class="top-copy">
        <p class="eyebrow">Product Detail</p>
        <h1>${product.name}</h1>
        <p class="price">${formatPrice(product.price)}</p>
        <p class="description">${product.description}</p>
        <button class="primary-dark" type="button">Add to Cart</button>
      </div>
    </section>

    ${renderImageCarousel("Explore Styles", "styles-carousel", styleImages, false)}

    <section class="editorial-stack">
      <h2>Style Inspiration</h2>
      <div class="inspiration-grid">
        ${inspirationLooks
          .map(
            (item) => `
              <article class="inspiration-card">
                <img src="${item.image}" alt="${item.caption}" loading="lazy" />
                <p>${item.caption}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>

    ${renderProductCarousel("Perfect Match", "match-carousel", matchProducts)}

    <section class="styled-for-you">
      <h2>Styled For You</h2>
      ${[product.styles[1], product.styles[3], product.styles[5]]
        .map(
          (image, index) => `
            <article class="parallax-card">
              <div class="parallax-media" style="--parallax-shift:${(index + 1) * 12}px;">
                <img src="${image}" alt="Editorial fashion look ${index + 1}" loading="lazy" />
              </div>
            </article>
          `
        )
        .join("")}
    </section>

    ${renderProductCarousel("You May Also Like", "like-carousel", alsoLikeProducts)}
  `;

  initializeCarousels();
  initializeParallax();
}

function renderImageCarousel(title, id, images) {
  return `
    <section class="carousel-section">
      <div class="section-head with-controls">
        <h2>${title}</h2>
        <div class="carousel-controls">
          <button class="arrow" type="button" data-target="${id}" data-direction="prev" aria-label="Previous">←</button>
          <button class="arrow" type="button" data-target="${id}" data-direction="next" aria-label="Next">→</button>
        </div>
      </div>
      <div class="carousel" id="${id}">
        <div class="carousel-track">
          ${images
            .map(
              (image) => `
                <article class="carousel-slide image-slide">
                  <img src="${image}" alt="Styled view of ${product.name}" loading="lazy" />
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderProductCarousel(title, id, items) {
  return `
    <section class="carousel-section">
      <div class="section-head with-controls">
        <h2>${title}</h2>
        <div class="carousel-controls">
          <button class="arrow" type="button" data-target="${id}" data-direction="prev" aria-label="Previous">←</button>
          <button class="arrow" type="button" data-target="${id}" data-direction="next" aria-label="Next">→</button>
        </div>
      </div>
      <div class="carousel" id="${id}">
        <div class="carousel-track">
          ${items
            .map(
              (item) => `
                <a class="carousel-slide product-slide" href="product.html?id=${item.id}">
                  <div class="slide-media">
                    <img src="${item.styles[0]}" alt="${item.name}" loading="lazy" />
                  </div>
                  <p>${item.name}</p>
                </a>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function initializeCarousels() {
  const states = {};
  const arrows = document.querySelectorAll(".arrow");

  arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      const carouselId = arrow.dataset.target;
      const direction = arrow.dataset.direction;
      const carousel = document.getElementById(carouselId);
      if (!carousel) return;

      const track = carousel.querySelector(".carousel-track");
      const slides = track.children.length;
      const visible = window.innerWidth < 768 ? 1 : window.innerWidth < 1100 ? 2 : 3;
      const max = Math.max(0, slides - visible);

      if (!states[carouselId]) states[carouselId] = 0;
      states[carouselId] = direction === "next" ? Math.min(max, states[carouselId] + 1) : Math.max(0, states[carouselId] - 1);

      track.style.transform = `translateX(-${states[carouselId] * (100 / visible)}%)`;
    });
  });
}

function initializeParallax() {
  const medias = document.querySelectorAll(".parallax-media");

  const applyParallax = () => {
    medias.forEach((media) => {
      const rect = media.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const distance = (elementCenter - viewportCenter) * 0.08;
      const baseShift = Number.parseFloat(getComputedStyle(media).getPropertyValue("--parallax-shift")) || 0;
      media.style.transform = `translateY(${baseShift - distance}px)`;
    });
  };

  applyParallax();
  window.addEventListener("scroll", applyParallax, { passive: true });
}
