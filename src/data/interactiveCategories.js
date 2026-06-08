/**
 * Editorial nav — category labels, hover images, and static line layout.
 * Replace image paths in public/ when final assets are ready.
 */

export const interactiveCategories = [
  {
    id: "t-shirts",
    label: "T-Shirts",
    image: "/tri1.png",
  },
  {
    id: "pants",
    label: "Pants",
    image: "/denim4.png",
  },
  {
    id: "sweatshirts",
    label: "Sweatshirts",
    image: "/ss.png",
  },
  {
    id: "shirts",
    label: "Shirts",
    image: "/shirts1.png",
  },
  {
    id: "jackets",
    label: "Jackets",
    image: "/jacket.png",
  },
  {
    id: "blazers",
    label: "Blazers",
    image: "/blazer.png",
  },
  {
    id: "sweaters",
    label: "Sweaters",
    image: "/f5.webp",
  },
  {
    id: "polo-shirts",
    label: "Polo Shirts",
    image: "/f3.webp",
  },
  {
    id: "bags",
    label: "Bags",
    image: "/p11.png",
  },
  {
    id: "accessories",
    label: "Accessories",
    image: "/pause1.png",
  },
  {
    id: "shorts",
    label: "Shorts",
    image: "/f4.webp",
  },
];

/** Static multi-line layout matching the editorial reference */
export const editorialCategoryLines = [
  [
    { id: "t-shirts", suffix: ", " },
    { id: "pants", suffix: ", " },
    { id: "sweatshirts", suffix: "," },
  ],
  [
    { id: "shirts", suffix: ", " },
    { id: "jackets", suffix: " | " },
    { id: "blazers", suffix: ", " },
    { id: "sweaters", suffix: "," },
  ],
  [
    { id: "polo-shirts", suffix: ", " },
    { id: "bags", suffix: ", " },
    { id: "accessories", suffix: ", " },
    { id: "shorts", suffix: "." },
  ],
];

export const categoryById = Object.fromEntries(
  interactiveCategories.map((item) => [item.id, item])
);
