"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { WOMEN_PROMO_BANNER } from "@/data/womenPromoBanner";

export default function WomenPromoBanner() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;

    const reveal = () => setIsVisible(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px" }
    );

    observer.observe(el);

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      reveal();
    }

    const fallback = window.setTimeout(reveal, 600);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="women-promo-banner"
      className="women-promo-banner"
      aria-labelledby="women-promo-banner-heading"
    >
      <Link
        href={WOMEN_PROMO_BANNER.href}
        className={`women-promo-banner__link ${
          isVisible ? "women-promo-banner__link--visible" : ""
        }`}
      >
        <img
          src={WOMEN_PROMO_BANNER.image}
          alt={WOMEN_PROMO_BANNER.alt}
          className="women-promo-banner__image"
          loading="lazy"
          decoding="async"
        />
        <div className="women-promo-banner__scrim" aria-hidden="true" />
        <div className="women-promo-banner__copy">
          <h2 id="women-promo-banner-heading" className="women-promo-banner__headline">
            {WOMEN_PROMO_BANNER.headline}
          </h2>
          <p className="women-promo-banner__subtitle">{WOMEN_PROMO_BANNER.subtitle}</p>
        </div>
      </Link>
    </section>
  );
}
