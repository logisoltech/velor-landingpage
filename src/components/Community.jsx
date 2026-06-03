"use client";

import Link from "next/link";
import { memo, useEffect, useRef } from "react";
import { communityVideos } from "@/data/communityAssets";

const CommunityVideoCard = memo(function CommunityVideoCard({ item, index }) {
  const cardRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const video = videoRef.current;
    if (!card || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!video.dataset.loaded) {
            video.src = item.videoUrl;
            video.dataset.loaded = "true";
          }
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35, rootMargin: "4% 0px" }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, [item.videoUrl]);

  return (
    <li ref={cardRef} className="community__card">
      <div className="community__media">
        <video
          ref={videoRef}
          className="community__video"
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
        />
      </div>

      <div className="community__pill" aria-hidden="true">
        {item.products.slice(0, 2).map((src, productIndex) => (
          <img
            key={`${index}-product-${productIndex}`}
            src={src}
            alt=""
            className="community__pill-thumb"
            loading="lazy"
            decoding="async"
          />
        ))}
        <span className="community__pill-more">+1</span>
      </div>
    </li>
  );
});

export default function Community() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onWheel = (event) => {
      const dominantDelta =
        Math.abs(event.deltaX) > Math.abs(event.deltaY)
          ? event.deltaX
          : event.deltaY;

      if (dominantDelta === 0) return;

      event.preventDefault();
      track.scrollLeft += dominantDelta;
    };

    track.addEventListener("wheel", onWheel, { passive: false });
    return () => track.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section className="community" aria-labelledby="community-heading">
      <header className="community__header">
        <h2 id="community-heading" className="community__title">
          COMMUNITY
        </h2>
        <p className="community__subtitle">
          EXPLORE HOW OUR COMMUNITY STYLES IT
        </p>
        <Link href="#instagram" className="community__cta">
          INSTAGRAM
          <span className="community__cta-arrow" aria-hidden="true">
            →
          </span>
        </Link>
      </header>

      <div className="community__viewport">
        <ul ref={trackRef} className="community__track">
          {communityVideos.map((item, index) => (
            <CommunityVideoCard key={`community-card-${index}`} item={item} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}
