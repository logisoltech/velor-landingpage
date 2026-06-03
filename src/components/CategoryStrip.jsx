import Link from "next/link";
import { WOMEN_CATEGORY_BLOCKS } from "@/data/womenCategoryBlocks";

export default function CategoryStrip() {
  return (
    <section className="women-blocks" aria-label="Shop by category">
      <div className="women-blocks__grid">
        {WOMEN_CATEGORY_BLOCKS.map((category) => (
          <Link
            key={category.title}
            href={category.href}
            className="women-blocks__card"
          >
            <div className="women-blocks__media">
              <img
                src={category.image}
                alt={category.alt}
                className="women-blocks__image"
                loading="lazy"
                decoding="async"
              />
              <div className="women-blocks__overlay" aria-hidden="true" />
            </div>
            <h2 className="women-blocks__title">{category.title}</h2>
          </Link>
        ))}
      </div>
    </section>
  );
}
