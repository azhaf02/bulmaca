const fashionProducts = [
  {
    id: "blue-oxford-shirt",
    type: "shirt",
    name: "Blue Oxford Shirt",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80",
    description: "A premium oxford cotton shirt with a crisp silhouette for smart-casual styling.",
  },
  {
    id: "white-linen-shirt",
    type: "shirt",
    name: "White Linen Shirt",
    price: 119,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80",
    description: "Breathable luxury linen shirt designed for effortless summer elegance.",
  },
  {
    id: "black-casual-shirt",
    type: "shirt",
    name: "Black Casual Shirt",
    price: 135,
    image:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=900&q=80",
    description: "A clean black shirt with contemporary tailoring and elevated finishing.",
  },
  {
    id: "olive-green-shirt",
    type: "shirt",
    name: "Olive Green Shirt",
    price: 124,
    image:
      "https://images.unsplash.com/photo-1542327897-d73f4005b533?auto=format&fit=crop&w=900&q=80",
    description: "Earth-tone statement piece balancing softness and structure.",
  },
  {
    id: "striped-summer-shirt",
    type: "shirt",
    name: "Striped Summer Shirt",
    price: 115,
    image:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=80",
    description: "Lightweight striped shirt bringing movement and coastal sophistication.",
  },
  {
    id: "denim-shirt",
    type: "shirt",
    name: "Denim Shirt",
    price: 139,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
    description: "Structured denim shirt with minimalist detailing and urban versatility.",
  },
  {
    id: "black-slim-pants",
    type: "pants",
    name: "Black Slim Pants",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80",
    description: "Sharp slim-fit trousers for polished day-to-night looks.",
  },
  {
    id: "beige-chinos",
    type: "pants",
    name: "Beige Chinos",
    price: 132,
    image:
      "https://images.unsplash.com/photo-1520367745676-54f249b2c2ee?auto=format&fit=crop&w=900&q=80",
    description: "Soft beige chinos with tapered lines and comfort stretch fabric.",
  },
  {
    id: "grey-formal-pants",
    type: "pants",
    name: "Grey Formal Pants",
    price: 158,
    image:
      "https://images.unsplash.com/photo-1593030103066-0093718efeb9?auto=format&fit=crop&w=900&q=80",
    description: "Tailored formal pants cut for modern professional wardrobes.",
  },
  {
    id: "dark-blue-jeans",
    type: "pants",
    name: "Dark Blue Jeans",
    price: 144,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=80",
    description: "Refined dark-wash denim balancing comfort and clean lines.",
  },
  {
    id: "khaki-pants",
    type: "pants",
    name: "Khaki Pants",
    price: 138,
    image:
      "https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=900&q=80",
    description: "Relaxed khaki silhouette made for premium everyday wear.",
  },
  {
    id: "white-summer-trousers",
    type: "pants",
    name: "White Summer Trousers",
    price: 141,
    image:
      "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?auto=format&fit=crop&w=900&q=80",
    description: "Crisp lightweight trousers for elevated resort-inspired outfits.",
  },
];

const shirtToPantsMap = {
  "blue-oxford-shirt": ["black-slim-pants", "beige-chinos", "grey-formal-pants"],
  "white-linen-shirt": ["grey-formal-pants", "khaki-pants", "white-summer-trousers"],
  "black-casual-shirt": ["beige-chinos", "dark-blue-jeans", "khaki-pants"],
  "olive-green-shirt": ["black-slim-pants", "beige-chinos", "white-summer-trousers"],
  "striped-summer-shirt": ["white-summer-trousers", "khaki-pants", "dark-blue-jeans"],
  "denim-shirt": ["black-slim-pants", "dark-blue-jeans", "beige-chinos"],
};

const styleVariations = [
  "Sleeves Folded",
  "Sleeves Normal",
  "Tucked In",
  "Untucked",
  "Casual Style",
  "Smart Style",
];

const outfitGallery = [
  {
    title: "Casual street look",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Office style",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Smart casual",
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Summer outfit",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "City evening style",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Weekend minimal",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80",
  },
];

function getProductById(id) {
  return fashionProducts.find((item) => item.id === id);
}

function formatPrice(value) {
  return `$${value}`;
}
