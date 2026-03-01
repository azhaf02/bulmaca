const products = [
  { id: "prod1", name: "Blue Oxford Shirt", price: 129, image: "images/prod1/style1.jpg", folder: "images/prod1" },
  { id: "prod2", name: "White Linen Shirt", price: 139, image: "images/prod2/style1.jpg", folder: "images/prod2" },
  { id: "prod3", name: "Black Casual Shirt", price: 119, image: "images/prod3/style1.jpg", folder: "images/prod3" },
  { id: "prod4", name: "Denim Shirt", price: 149, image: "images/prod4/style1.jpg", folder: "images/prod4" },
  { id: "prod5", name: "Olive Shirt", price: 125, image: "images/prod5/style1.jpg", folder: "images/prod5" },
  { id: "prod6", name: "Striped Shirt", price: 132, image: "images/prod6/style1.jpg", folder: "images/prod6" },
  { id: "prod7", name: "Black Slim Pants", price: 159, image: "images/prod7/style1.jpg", folder: "images/prod7" },
  { id: "prod8", name: "Beige Chinos", price: 149, image: "images/prod8/style1.jpg", folder: "images/prod8" },
  { id: "prod9", name: "Grey Pants", price: 152, image: "images/prod9/style1.jpg", folder: "images/prod9" },
  { id: "prod10", name: "Dark Jeans", price: 165, image: "images/prod10/style1.jpg", folder: "images/prod10" },
  { id: "prod11", name: "Khaki Pants", price: 146, image: "images/prod11/style1.jpg", folder: "images/prod11" },
  { id: "prod12", name: "White Trousers", price: 169, image: "images/prod12/style1.jpg", folder: "images/prod12" },
];

function getProductById(id) {
  return products.find((product) => product.id === id);
}

function formatPrice(price) {
  return `$${price}`;
}
