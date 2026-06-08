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

const editorialMarqueeOrder = [
  "t-shirts",
  "pants",
  "sweatshirts",
  "bags",
  "jackets",
  "accessories",
  "shirts",
  "polo-shirts",
  "blazers",
  "shorts",
];

const MARQUEE_SEQUENCE_REPEATS = 6;

/** Single editorial marquee sequence — duplicated in the track for seamless loops */
export const editorialMarqueeItems = Array.from(
  { length: MARQUEE_SEQUENCE_REPEATS },
  () => editorialMarqueeOrder
)
  .flat()
  .map((id) => ({ id, suffix: marqueeSuffix }));

export const categoryById = Object.fromEntries(
  interactiveCategories.map((item) => [item.id, item])
);
