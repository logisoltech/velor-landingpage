import Link from "next/link";
import { SUMMER_PAUSE_ASSETS } from "@/data/summerPauseAssets";
import SummerPauseBanner from "@/components/SummerPauseBanner";
import PauseEditorialGrid from "@/components/PauseEditorialGrid";
import BrandCampaign from "@/components/BrandCampaign";

function FeaturedCard({ product }) {
  return (
    <article className="summer-pause__featured">
      <Link
        href={`#${product.id}`}
        className="summer-pause__card-link summer-pause__card-link--featured"
        aria-label={product.alt}
      >
        <div className="summer-pause__media summer-pause__media--featured">
          <img
            src={product.image}
            alt={product.alt}
            className="summer-pause__product-image"
            loading="lazy"
            decoding="async"
          />
        </div>
      </Link>
    </article>
  );
}

function GridCard({ product }) {
  return (
    <li className="summer-pause__card summer-pause__card--grid">
      <Link href={`#${product.id}`} className="summer-pause__card-link">
        <div className="summer-pause__media summer-pause__media--grid">
          <img
            src={product.image}
            alt={product.alt}
            className="summer-pause__product-image"
            loading="lazy"
            decoding="async"
          />
          {product.comingSoon ? (
            <div className="summer-pause__coming-soon" aria-hidden="true">
              COMING SOON
            </div>
          ) : null}
          <span className="summer-pause__add-icon" aria-hidden="true">
            +
          </span>
        </div>

        <div className="summer-pause__info summer-pause__info--grid">
          <h3 className="summer-pause__product-title">{product.title}</h3>
          <p className="summer-pause__product-price">{product.price}</p>
        </div>
      </Link>
    </li>
  );
}

export default function SummerPause() {
  const { featured, gridProducts } = SUMMER_PAUSE_ASSETS;

  return (
    <section className="summer-pause" aria-labelledby="summer-pause-heading">
      <SummerPauseBanner />

      <div className="summer-pause__container">
        <header className="summer-pause__collection-header">
          <p className="summer-pause__collection-label">NEW ARRIVALS</p>
          <h2 className="summer-pause__collection-title">Most Loved Pieces</h2>
          <p className="summer-pause__collection-description">
            Thoughtfully designed everyday styles that combine comfort,
            versatility, and effortless appeal. Reliable go-to pieces made to
            fit seamlessly into your daily wardrobe.
          </p>
        </header>

        <div
          className="summer-pause__showcase"
          role="region"
          aria-label="Most loved pieces"
        >
          <FeaturedCard product={featured} />
          <ul className="summer-pause__mini-grid">
            {gridProducts.map((product) => (
              <GridCard key={product.id} product={product} />
            ))}
          </ul>
        </div>

        <div className="summer-pause__collection-footer">
          <Link href="#view-collection" className="summer-pause__view-collection">
            View Collection
            <span className="summer-pause__view-collection-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>

      <PauseEditorialGrid />
      <BrandCampaign />
    </section>
  );
}
