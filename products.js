const productGrid = document.getElementById("product-grid");

if (productGrid) {
  productGrid.innerHTML = products
    .map(
      (product) => `
        <a class="product-card" href="product.html?id=${product.id}">
          <div class="product-media">
            <img src="${product.styles[0]}" alt="${product.name}" loading="lazy" />
          </div>
          <div class="product-content">
            <h3>${product.name}</h3>
            <p>${formatPrice(product.price)}</p>
          </div>
        </a>
      `
    )
    .join("");
}
