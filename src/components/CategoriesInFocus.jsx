"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  WOMEN_FOCUS_CATEGORIES,
  WOMEN_FOCUS_FEATURED,
  WOMEN_FOCUS_PRODUCTS_BY_CATEGORY,
} from "@/data/womenCategoriesFocus";

export default function CategoriesInFocus() {
  const [activeCategory, setActiveCategory] = useState(
    WOMEN_FOCUS_CATEGORIES[0].id
  );
  const carouselRef = useRef(null);
  const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0 });

  const products = WOMEN_FOCUS_PRODUCTS_BY_CATEGORY[activeCategory] ?? [];

  const handleCategoryChange = (categoryId) => {
    if (categoryId === activeCategory) return;
    carouselRef.current?.scrollTo({ left: 0, behavior: "auto" });
    setActiveCategory(categoryId);
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
  }, [bindWheelScroll, activeCategory]);

  const onPointerDown = (event) => {
    const el = carouselRef.current;
    if (!el || event.button !== 0) return;

    dragRef.current = {
      active: true,
      startX: event.clientX,
      scrollLeft: el.scrollLeft,
    };
    el.setPointerCapture(event.pointerId);
    el.classList.add("women-focus__carousel--dragging");
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
    el.classList.remove("women-focus__carousel--dragging");
    if (el.hasPointerCapture(event.pointerId)) {
      el.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <section className="women-focus" aria-labelledby="women-focus-heading">
      <div className="women-focus__layout">
        <div className="women-focus__featured">
          <img
            src={WOMEN_FOCUS_FEATURED.image}
            alt={WOMEN_FOCUS_FEATURED.alt}
            className="women-focus__featured-image"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="women-focus__panel">
          <h2 id="women-focus-heading" className="women-focus__heading">
            CATEGORIES IN FOCUS
          </h2>

          <nav className="women-focus__nav" aria-label="Focus categories">
            <ul className="women-focus__nav-list">
              {WOMEN_FOCUS_CATEGORIES.map((category) => (
                <li key={category.id}>
                  <button
                    type="button"
                    className={`women-focus__nav-item ${
                      activeCategory === category.id
                        ? "women-focus__nav-item--active"
                        : ""
                    }`}
                    onClick={() => handleCategoryChange(category.id)}
                    aria-selected={activeCategory === category.id}
                  >
                    {category.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="women-focus__carousel-wrap">
            <div
              key={activeCategory}
              ref={carouselRef}
              className="women-focus__carousel"
              role="region"
              aria-label={`${WOMEN_FOCUS_CATEGORIES.find((c) => c.id === activeCategory)?.label} products`}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
            >
              <ul className="women-focus__products">
                {products.map((product) => (
                  <li key={product.id} className="women-focus__product">
                    <Link
                      href={`#${product.id}`}
                      className="women-focus__product-link"
                      draggable={false}
                    >
                      <div className="women-focus__product-media">
                        <img
                          src={product.image}
                          alt={product.alt}
                          className="women-focus__product-image"
                          loading="lazy"
                          decoding="async"
                          draggable={false}
                        />
                      </div>

                      <div className="women-focus__product-info">
                        <h3 className="women-focus__product-title">
                          {product.title}
                        </h3>
                        <p className="women-focus__product-meta">{product.fit}</p>
                        <p className="women-focus__product-price">
                          {product.price}
                        </p>
                        <span
                          className={`women-focus__swatch ${
                            product.colorBorder
                              ? "women-focus__swatch--bordered"
                              : ""
                          }`}
                          style={{ backgroundColor: product.color }}
                          aria-hidden="true"
                        />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
