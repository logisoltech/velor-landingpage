import Link from "next/link";
import { categoryTiles } from "@/data/womenCategoryTiles";

export default function CategoryTiles() {
  return (
    <section
      id="women-category-tiles"
      className="category-tiles"
      aria-label="Shop by category"
    >
      <div className="category-tiles__grid">
        {categoryTiles.map((tile) => (
          <Link
            key={tile.title}
            href={tile.href}
            className="category-tiles__card"
          >
            <div className="category-tiles__media">
              <img
                src={tile.image}
                alt={tile.alt}
                className="category-tiles__image"
                loading="eager"
                decoding="async"
              />
              <div className="category-tiles__overlay" aria-hidden="true" />
            </div>
            <h2 className="category-tiles__title">{tile.title}</h2>
          </Link>
        ))}
      </div>
    </section>
  );
}
