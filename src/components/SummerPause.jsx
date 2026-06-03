import Link from "next/link";
import { SUMMER_PAUSE_ASSETS } from "@/data/summerPauseAssets";
import SummerPauseBanner from "@/components/SummerPauseBanner";

export default function SummerPause() {
  const { products, editorial } = SUMMER_PAUSE_ASSETS;

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

        <ul className="summer-pause__grid">
          {products.map((product) => (
            <li key={product.id} className="summer-pause__card">
              <Link href={`#${product.id}`} className="summer-pause__card-link">
                <div className="summer-pause__media">
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
                </div>

                <div className="summer-pause__quick-add" aria-hidden="true">
                  <span className="summer-pause__quick-add-text">
                    Add to Basket
                  </span>
                  <span className="summer-pause__quick-add-icon">
                    <svg
                      className="summer-pause__bag-icon"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M6 7h12l-1.2 13.2H7.2L6 7z"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 7V5.5a3 3 0 016 0V7"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>

                <div className="summer-pause__info">
                  <h3 className="summer-pause__product-title">{product.title}</h3>
                  <p className="summer-pause__product-meta">{product.meta}</p>
                  <p className="summer-pause__product-price">{product.price}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="summer-pause__editorial">
        <div className="summer-pause__editorial-header">
          <span className="summer-pause__editorial-season">{editorial.season}</span>
          <h2 id="summer-pause-heading" className="summer-pause__editorial-title">
            {editorial.title}
          </h2>
          <span className="summer-pause__editorial-year">{editorial.year}</span>
        </div>
        <p className="summer-pause__editorial-copy">{editorial.copy}</p>
      </div>
    </section>
  );
}
