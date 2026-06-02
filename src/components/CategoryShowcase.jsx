import Link from "next/link";
import { SHOWCASE_CATEGORIES } from "@/data/categoryAssets";

export default function CategoryShowcase() {
  return (
    <section className="categories" aria-labelledby="categories-heading">
      <h2 id="categories-heading" className="categories__heading">
        Explore Our Core Categories
      </h2>
      
      <div className="categories__grid">
        {SHOWCASE_CATEGORIES.map((category) => (
          <Link
            key={category.title}
            href={category.href}
            className="categories__card"
          >
            <div className="categories__media">
              <img
                src={category.image}
                alt={category.alt}
                className="categories__image"
                loading="lazy"
                decoding="async"
              />
              <div className="categories__overlay" aria-hidden="true" />
            </div>

            <div className="categories__content">
              <h3 className="categories__title">{category.title}</h3>
              <span className="categories__cta">Shop Now</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
