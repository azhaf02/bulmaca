const productGrid = document.getElementById("product-grid");

if (productGrid) {
  productGrid.innerHTML = products
    .map(
      (product) => `
      <a class="product-card" href="product.html?id=${product.id}">
        <div class="product-media">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
        </div>
        <div class="product-content">
          <h2>${product.name}</h2>
          <p>${formatPrice(product.price)}</p>
        </div>
      </a>
    `
    )
    .join("");
}
