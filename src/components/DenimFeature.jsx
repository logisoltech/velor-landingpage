import Link from "next/link";
import { WOMEN_DENIM_FEATURE } from "@/data/womenDenimFeature";

export default function DenimFeature() {
  return (
    <section className="denim-feature" aria-labelledby="denim-feature-heading">
      <div className="denim-feature__container">
        <header className="denim-feature__header">
          <h2 id="denim-feature-heading" className="denim-feature__title">
            {WOMEN_DENIM_FEATURE.title}
          </h2>
          <p className="denim-feature__copy">{WOMEN_DENIM_FEATURE.paragraph}</p>
          <Link href={WOMEN_DENIM_FEATURE.viewAllHref} className="denim-feature__cta">
            {WOMEN_DENIM_FEATURE.viewAllLabel}
            <span className="denim-feature__cta-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </header>
      </div>

      <div className="denim-feature__banner-wrap">
        <img
          src={WOMEN_DENIM_FEATURE.bannerImage}
          alt={WOMEN_DENIM_FEATURE.bannerAlt}
          className="denim-feature__banner-image"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}
