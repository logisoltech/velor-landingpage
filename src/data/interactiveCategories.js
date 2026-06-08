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
    image: "/sweater.png",
  },
  {
    id: "polo-shirts",
    label: "Polo Shirts",
    image: "/polosh.png",
  },
  {
    id: "bags",
    label: "Bags",
    image: "/bags.png",
  },
  {
    id: "accessories",
    label: "Accessories",
    image: "/acc.png",
  },
  {
    id: "shorts",
    label: "Shorts",
    image: "/shorts.png",
  },
];

const marqueeSuffix = ", ";

/** Shuffled editorial marquee rows — duplicated in the track for seamless loops */
export const editorialMarqueeRows = [
  {
    direction: "left",
    items: [
      { id: "t-shirts", suffix: marqueeSuffix },
      { id: "pants", suffix: marqueeSuffix },
      { id: "sweatshirts", suffix: marqueeSuffix },
      { id: "bags", suffix: marqueeSuffix },
      { id: "jackets", suffix: marqueeSuffix },
      { id: "accessories", suffix: marqueeSuffix },
      { id: "blazers", suffix: marqueeSuffix },
      { id: "shorts", suffix: marqueeSuffix },
      { id: "shirts", suffix: marqueeSuffix },
      { id: "polo-shirts", suffix: marqueeSuffix },
    ],
  },
  {
    direction: "right",
    items: [
      { id: "pants", suffix: marqueeSuffix },
      { id: "shirts", suffix: marqueeSuffix },
      { id: "accessories", suffix: marqueeSuffix },
      { id: "t-shirts", suffix: marqueeSuffix },
      { id: "shorts", suffix: marqueeSuffix },
      { id: "blazers", suffix: marqueeSuffix },
      { id: "sweatshirts", suffix: marqueeSuffix },
      { id: "bags", suffix: marqueeSuffix },
      { id: "jackets", suffix: marqueeSuffix },
      { id: "polo-shirts", suffix: marqueeSuffix },
    ],
  },
  {
    direction: "left",
    items: [
      { id: "accessories", suffix: marqueeSuffix },
      { id: "jackets", suffix: marqueeSuffix },
      { id: "t-shirts", suffix: marqueeSuffix },
      { id: "sweatshirts", suffix: marqueeSuffix },
      { id: "shirts", suffix: marqueeSuffix },
      { id: "polo-shirts", suffix: marqueeSuffix },
      { id: "bags", suffix: marqueeSuffix },
      { id: "shorts", suffix: marqueeSuffix },
      { id: "pants", suffix: marqueeSuffix },
      { id: "blazers", suffix: marqueeSuffix },
    ],
  },
];

export const categoryById = Object.fromEntries(
  interactiveCategories.map((item) => [item.id, item])
);
