"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { bannerImages } from "@/data/summerPauseAssets";

const SLIDE_INTERVAL_MS = 3000;

export default function SummerPauseBanner() {
  const [trackIndex, setTrackIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const extendedSlides = useMemo(
    () => [...bannerImages, bannerImages[0]],
    []
  );

  const goToNext = useCallback(() => {
    setTransitionEnabled(true);
    setTrackIndex((prev) => prev + 1);
  }, []);

  useEffect(() => {
    if (!transitionEnabled) return;

    const timer = window.setTimeout(goToNext, SLIDE_INTERVAL_MS);
    return () => window.clearTimeout(timer);
  }, [trackIndex, transitionEnabled, goToNext]);

  const handleTrackTransitionEnd = () => {
    if (trackIndex !== bannerImages.length) return;

    setTransitionEnabled(false);
    setTrackIndex(0);
  };

  useEffect(() => {
    if (transitionEnabled || trackIndex !== 0) return;

    const frame = window.requestAnimationFrame(() => {
      setTransitionEnabled(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [transitionEnabled, trackIndex]);

  return (
    <div className="summer-pause__banner">
      <div
        className={`summer-pause__banner-track ${
          transitionEnabled
            ? "summer-pause__banner-track--animate"
            : "summer-pause__banner-track--instant"
        }`}
        style={{ transform: `translateX(-${trackIndex * 100}%)` }}
        onTransitionEnd={handleTrackTransitionEnd}
      >
        {extendedSlides.map((src, index) => (
          <div key={`${src}-${index}`} className="summer-pause__banner-slide">
            <img
              src={src}
              alt=""
              className="summer-pause__banner-image"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
