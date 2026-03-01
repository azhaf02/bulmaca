const allProductsGrid = document.getElementById("all-products-grid");

if (allProductsGrid) {
  allProductsGrid.innerHTML = fashionProducts.map((product) => `
    <article class="product-card">
      <img src="${product.image}" alt="${product.name}" loading="lazy" />
      <div class="card-content">
        <h3>${product.name}</h3>
        <p>${product.type === "shirt" ? "Shirt" : "Pants"}</p>
        <div class="card-row">
          <strong>${formatPrice(product.price)}</strong>
          <a class="btn-secondary" href="product.html?id=${product.id}">Quick preview</a>
        </div>
      </div>
    </article>
  `).join("");
}
