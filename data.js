const products = [
  {
    id: 1,
    name: "Blue Oxford Shirt",
    price: 129,
    description: "Tailored from premium cotton with a crisp finish for effortless day-to-night styling.",
    styles: [
      "images/prod1/style1.jpg",
      "images/prod1/style2.jpg",
      "images/prod1/style3.jpg",
      "images/prod1/style4.jpg",
      "images/prod1/style5.jpg",
      "images/prod1/style6.jpg",
    ],
  },
  {
    id: 2,
    name: "White Linen Shirt",
    price: 139,
    description: "Lightweight linen with a modern cut, designed for elevated warm-weather dressing.",
    styles: [
      "images/prod2/style1.jpg",
      "images/prod2/style2.jpg",
      "images/prod2/style3.jpg",
      "images/prod2/style4.jpg",
      "images/prod2/style5.jpg",
      "images/prod2/style6.jpg",
    ],
  },
  {
    id: 3,
    name: "Black Casual Shirt",
    price: 119,
    description: "Minimal silhouette in deep black, ideal for clean monochrome outfit combinations.",
    styles: [
      "images/prod3/style1.jpg",
      "images/prod3/style2.jpg",
      "images/prod3/style3.jpg",
      "images/prod3/style4.jpg",
      "images/prod3/style5.jpg",
      "images/prod3/style6.jpg",
    ],
  },
  {
    id: 4,
    name: "Denim Shirt",
    price: 149,
    description: "Contemporary denim texture with refined details, crafted for premium casual wardrobes.",
    styles: [
      "images/prod4/style1.jpg",
      "images/prod4/style2.jpg",
      "images/prod4/style3.jpg",
      "images/prod4/style4.jpg",
      "images/prod4/style5.jpg",
      "images/prod4/style6.jpg",
    ],
  },
  {
    id: 5,
    name: "Olive Shirt",
    price: 125,
    description: "Muted olive tones and sharp tailoring deliver understated luxury in everyday styling.",
    styles: [
      "images/prod5/style1.jpg",
      "images/prod5/style2.jpg",
      "images/prod5/style3.jpg",
      "images/prod5/style4.jpg",
      "images/prod5/style5.jpg",
      "images/prod5/style6.jpg",
    ],
  },
  {
    id: 6,
    name: "Striped Shirt",
    price: 132,
    description: "Editorial stripe pattern with a modern fit to bring contrast to curated fashion looks.",
    styles: [
      "images/prod6/style1.jpg",
      "images/prod6/style2.jpg",
      "images/prod6/style3.jpg",
      "images/prod6/style4.jpg",
      "images/prod6/style5.jpg",
      "images/prod6/style6.jpg",
    ],
  },
  {
    id: 7,
    name: "Black Slim Pants",
    price: 159,
    description: "Sculpted slim silhouette with stretch comfort, designed for sleek urban styling.",
    styles: [
      "images/prod7/style1.jpg",
      "images/prod7/style2.jpg",
      "images/prod7/style3.jpg",
      "images/prod7/style4.jpg",
      "images/prod7/style5.jpg",
      "images/prod7/style6.jpg",
    ],
  },
  {
    id: 8,
    name: "Beige Chinos",
    price: 149,
    description: "Soft beige tailoring with clean lines, perfect for versatile premium outfit building.",
    styles: [
      "images/prod8/style1.jpg",
      "images/prod8/style2.jpg",
      "images/prod8/style3.jpg",
      "images/prod8/style4.jpg",
      "images/prod8/style5.jpg",
      "images/prod8/style6.jpg",
    ],
  },
  {
    id: 9,
    name: "Grey Pants",
    price: 152,
    description: "Modern tapered shape in cool grey, balancing formal precision with casual ease.",
    styles: [
      "images/prod9/style1.jpg",
      "images/prod9/style2.jpg",
      "images/prod9/style3.jpg",
      "images/prod9/style4.jpg",
      "images/prod9/style5.jpg",
      "images/prod9/style6.jpg",
    ],
  },
  {
    id: 10,
    name: "Dark Jeans",
    price: 165,
    description: "Premium dark-wash denim with minimalist detailing for polished everyday wear.",
    styles: [
      "images/prod10/style1.jpg",
      "images/prod10/style2.jpg",
      "images/prod10/style3.jpg",
      "images/prod10/style4.jpg",
      "images/prod10/style5.jpg",
      "images/prod10/style6.jpg",
    ],
  },
  {
    id: 11,
    name: "Khaki Pants",
    price: 146,
    description: "Refined khaki tone with structured drape, built for curated layering and styling.",
    styles: [
      "images/prod11/style1.jpg",
      "images/prod11/style2.jpg",
      "images/prod11/style3.jpg",
      "images/prod11/style4.jpg",
      "images/prod11/style5.jpg",
      "images/prod11/style6.jpg",
    ],
  },
  {
    id: 12,
    name: "White Trousers",
    price: 169,
    description: "Crisp white tailoring with a fluid silhouette for statement luxury outfit moments.",
    styles: [
      "images/prod12/style1.jpg",
      "images/prod12/style2.jpg",
      "images/prod12/style3.jpg",
      "images/prod12/style4.jpg",
      "images/prod12/style5.jpg",
      "images/prod12/style6.jpg",
    ],
  },
];

function getProductById(id) {
  const numericId = Number(id);
  return products.find((product) => product.id === numericId);
}

function formatPrice(price) {
  return `$${price}`;
}
