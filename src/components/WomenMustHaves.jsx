"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  WOMEN_MUST_HAVES_PRODUCTS_BY_TAB,
  WOMEN_MUST_HAVES_TABS,
} from "@/data/womenMustHavesAssets";

export default function WomenMustHaves() {
  const [activeTab, setActiveTab] = useState(WOMEN_MUST_HAVES_TABS[0].id);
  const carouselRef = useRef(null);
  const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0 });

  const products = WOMEN_MUST_HAVES_PRODUCTS_BY_TAB[activeTab] ?? [];
  const hideSwatches = activeTab === "fragrances";

  const handleTabChange = (tabId) => {
    if (tabId === activeTab) return;
    carouselRef.current?.scrollTo({ left: 0, behavior: "auto" });
    setActiveTab(tabId);
  };

  const bindWheelScroll = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return undefined;

    const onWheel = (event) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      event.preventDefault();
      el.scrollLeft += event.deltaY;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  useEffect(() => {
    return bindWheelScroll();
  }, [bindWheelScroll, activeTab]);

  const onPointerDown = (event) => {
    const el = carouselRef.current;
    if (!el || event.button !== 0) return;

    dragRef.current = {
      active: true,
      startX: event.clientX,
      scrollLeft: el.scrollLeft,
    };
    el.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event) => {
    if (!dragRef.current.active || !carouselRef.current) return;
    event.preventDefault();
    const delta = event.clientX - dragRef.current.startX;
    carouselRef.current.scrollLeft = dragRef.current.scrollLeft - delta;
  };

  const endDrag = (event) => {
    const el = carouselRef.current;
    if (!dragRef.current.active || !el) return;

    dragRef.current.active = false;
    if (el.hasPointerCapture(event.pointerId)) {
      el.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <section
      id="women-must-haves"
      className="must-haves women-must-haves"
      aria-labelledby="women-must-haves-heading"
    >
      <div className="must-haves__container">
        <header className="must-haves__header">
          <h2 id="women-must-haves-heading" className="must-haves__title">
            MUST-HAVES
          </h2>
          <p className="must-haves__description">
            Thoughtfully designed everyday styles that combine comfort,
            versatility, and effortless appeal. Reliable go-to pieces made to
            fit seamlessly into your daily wardrobe.
          </p>
        </header>

        <nav className="must-haves__tabs" aria-label="Must-haves categories">
          <ul className="must-haves__tabs-list">
            {WOMEN_MUST_HAVES_TABS.map((tab) => (
              <li key={tab.id}>
                <button
                  type="button"
                  className={`must-haves__tab ${
                    activeTab === tab.id ? "must-haves__tab--active" : ""
                  }`}
                  onClick={() => handleTabChange(tab.id)}
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
          aria-label={`${WOMEN_MUST_HAVES_TABS.find((t) => t.id === activeTab)?.label} products`}
        >
          <ul
            ref={carouselRef}
            className="must-haves__products must-haves__products--scroll"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
          >
            {products.map((product) => (
              <li key={product.id} className="must-haves__product">
                <Link href={`#${product.id}`} className="must-haves__product-link">
                  <div className="must-haves__product-media">
                    <img
                      src={product.image}
                      alt={product.alt}
                      className="must-haves__product-image"
                      loading="lazy"
                      decoding="async"
                      draggable={false}
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

                    {!hideSwatches && product.colors.length > 0 && (
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
