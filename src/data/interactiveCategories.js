/**
 * Editorial nav — category labels, hover images, and static line layout.
 * Replace image paths in public/ when final assets are ready.
 */

export const interactiveCategories = [
  {
    id: "t-shirts",
    label: "T-Shirts",
    image: "/edit1.png",
  },
  {
    id: "pants",
    label: "Pants",
    image: "/edit2.png",
  },
  {
    id: "sweatshirts",
    label: "Sweatshirts",
    image: "/active.png",
  },
  {
    id: "shirts",
    label: "Shirts",
    image: "/edit3.png",
  },
  {
    id: "jackets",
    label: "Jackets",
    image: "/d1.webp",
  },
  {
    id: "blazers",
    label: "Blazers",
    image: "/f2.webp",
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
