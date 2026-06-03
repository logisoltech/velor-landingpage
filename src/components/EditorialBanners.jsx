import Link from "next/link";
import { WOMEN_EDITORIAL_BANNERS } from "@/data/womenEditorialBanners";

export default function EditorialBanners() {
  const { left, right } = WOMEN_EDITORIAL_BANNERS;

  return (
    <section
      id="women-editorial-banners"
      className="editorial-banners"
      aria-label="Editorial collections"
    >
      <div className="editorial-banners__grid">
        <Link href={left.href} className="editorial-banners__card">
          <div className="editorial-banners__media">
            <img
              src={left.image}
              alt={left.alt}
              className="editorial-banners__image"
              loading="lazy"
              decoding="async"
            />
          </div>
          <span className="editorial-banners__label">{left.label}</span>
        </Link>

        <Link href={right.href} className="editorial-banners__card">
          <div className="editorial-banners__media">
            <img
              src={right.image}
              alt={right.alt}
              className="editorial-banners__image"
              loading="lazy"
              decoding="async"
            />
          </div>
          <span className="editorial-banners__label">{right.label}</span>
        </Link>
      </div>
    </section>
  );
}
