"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const SLIDES = [
  { type: "video", src: "/H-2.mp4", duration: 5000 },
  { type: "video", src: "/H-3.mp4", duration: 5000 },
  { type: "image", src: "/H-1.jpg", duration: 3000, alt: "The May Edit — limited edition collection" },
  { type: "video", src: "/H-4.mp4", duration: 4000 },
  
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageCycle, setImageCycle] = useState(0);
  const videoRefs = useRef({});

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setTimeout(goToNext, SLIDES[activeIndex].duration);
    return () => clearTimeout(timer);
  }, [activeIndex, goToNext]);

  useEffect(() => {
    if (SLIDES[activeIndex].type === "image") {
      setImageCycle((c) => c + 1);
    }
  }, [activeIndex]);
  
  useEffect(() => {
    SLIDES.forEach((slide, index) => {
      if (slide.type !== "video") return;
      const video = videoRefs.current[index];
      if (!video) return;

      if (index === activeIndex) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeIndex]);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");

    const syncHeroVisibility = () => {
      if (!mobileQuery.matches) {
        document.documentElement.classList.remove("hero-past-viewport");
        return;
      }

      const pastHero = window.scrollY > window.innerHeight * 0.92;
      document.documentElement.classList.toggle("hero-past-viewport", pastHero);
    };

    syncHeroVisibility();
    window.addEventListener("scroll", syncHeroVisibility, { passive: true });
    window.addEventListener("resize", syncHeroVisibility);
    mobileQuery.addEventListener("change", syncHeroVisibility);

    return () => {
      window.removeEventListener("scroll", syncHeroVisibility);
      window.removeEventListener("resize", syncHeroVisibility);
      mobileQuery.removeEventListener("change", syncHeroVisibility);
      document.documentElement.classList.remove("hero-past-viewport");
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero__media-stack">
        {SLIDES.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={slide.src}
              className={`hero__slide ${isActive ? "hero__slide--active" : ""}`}
              aria-hidden={!isActive}
            >
              {slide.type === "video" ? (
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={slide.src}
                  muted
                  playsInline
                  preload="auto"
                  className="hero__video"
                />
              ) : (
                <div
                  key={`ken-${imageCycle}`}
                  className={`hero__image-wrap ${isActive ? "hero-ken-burns-img" : ""}`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    priority
                    quality={90}
                    sizes="100vw"
                    className="hero__image"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__content-inner">
          <h1 className="hero__title">The May Edit</h1>

          <p className="hero__text">
            A limited edition dress, and linen for the table.
            <br />
            Available for two weeks only.
          </p>
        </div>
      </div>

      <div className="hero__dots" role="tablist" aria-label="Hero slideshow">
        {SLIDES.map((slide, index) => (
          <span
            key={slide.src}
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Slide ${index + 1} of ${SLIDES.length}`}
            className={`hero__dot ${
              index === activeIndex ? "hero__dot--active" : "hero__dot--inactive"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
