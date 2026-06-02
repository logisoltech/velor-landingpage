"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  MUST_HAVES_PRODUCTS,
  MUST_HAVES_TABS,
} from "@/data/categoryAssets";

export default function MustHaves() {
  const [activeTab, setActiveTab] = useState(MUST_HAVES_TABS[0].id);

  const filteredProducts = useMemo(
    () => MUST_HAVES_PRODUCTS.filter((product) => product.tab === activeTab),
    [activeTab]
  );

  return (
    <section className="must-haves" aria-labelledby="must-haves-heading">
      <div className="must-haves__container">
        <header className="must-haves__header">
          <h2 id="must-haves-heading" className="must-haves__title">
            Must-Haves
          </h2>
          <p className="must-haves__description">
            Thoughtfully designed everyday styles that combine comfort,
            versatility, and effortless appeal. Reliable go-to pieces made to
            fit seamlessly into your daily wardrobe.
          </p>
        </header>

        <nav className="must-haves__tabs" aria-label="Product categories">
          <ul className="must-haves__tabs-list">
            {MUST_HAVES_TABS.map((tab) => (
              <li key={tab.id}>
                <button
                  type="button"
                  className={`must-haves__tab ${
                    activeTab === tab.id ? "must-haves__tab--active" : ""
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                  aria-selected={activeTab === tab.id}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div
          className="must-haves__gallery"
          role="region"
          aria-label={`${MUST_HAVES_TABS.find((t) => t.id === activeTab)?.label} products`}
        >
          <ul className="must-haves__products">
            {filteredProducts.map((product) => (
              <li key={product.id} className="must-haves__product">
                <Link href={`#${product.id}`} className="must-haves__product-link">
                  <div className="must-haves__product-media">
                    <img
                      src={product.image}
                      alt={product.alt}
                      className="must-haves__product-image"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="must-haves__quick-add" aria-hidden="true">
                    <span className="must-haves__quick-add-text">
                      Add to Basket
                    </span>
                    <span className="must-haves__quick-add-icon">
                      <svg
                        className="must-haves__bag-icon"
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

                  <div className="must-haves__product-info">
                    <h3 className="must-haves__product-title">{product.title}</h3>
                    <p className="must-haves__product-meta">{product.meta}</p>
                    <p className="must-haves__product-price">{product.price}</p>

                    {activeTab !== "fragrances" && (
                      <ul
                        className="must-haves__swatches"
                        aria-label="Available colors"
                      >
                        {product.colors.map((color, index) => (
                          <li key={`${product.id}-${color}`}>
                            <span
                              className={`must-haves__swatch ${
                                index === product.activeColor
                                  ? "must-haves__swatch--active"
                                  : ""
                              }`}
                              style={{ backgroundColor: color }}
                            />
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="must-haves__footer">
          <Link href="#shop-all" className="must-haves__view-all">
            View All
            <span className="must-haves__view-all-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
