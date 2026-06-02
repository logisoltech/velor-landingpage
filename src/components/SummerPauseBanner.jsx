"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { bannerImages } from "@/data/summerPauseAssets";

const SLIDE_INTERVAL_MS = 3000;
const TRANSITION_MS = 1100;
const CLONE_INDEX = bannerImages.length;

export default function SummerPauseBanner() {
  const [trackIndex, setTrackIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const resetPendingRef = useRef(false);

  const extendedSlides = useMemo(
    () => [...bannerImages, bannerImages[0]],
    []
  );

  const goToNext = useCallback(() => {
    if (resetPendingRef.current) return;

    setTransitionEnabled(true);
    setTrackIndex((prev) => {
      if (prev >= CLONE_INDEX) return prev;
      return prev + 1;
    });
  }, []);

  const resetToStart = useCallback(() => {
    if (resetPendingRef.current) return;

    resetPendingRef.current = true;
    setTransitionEnabled(false);
    setTrackIndex(0);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTransitionEnabled(true);
        resetPendingRef.current = false;
      });
    });
  }, []);

  useEffect(() => {
    if (!transitionEnabled || resetPendingRef.current) return;

    const timer = window.setTimeout(goToNext, SLIDE_INTERVAL_MS);
    return () => window.clearTimeout(timer);
  }, [trackIndex, transitionEnabled, goToNext]);

  useEffect(() => {
    if (trackIndex !== CLONE_INDEX || !transitionEnabled) return;

    const fallback = window.setTimeout(resetToStart, TRANSITION_MS + 50);
    return () => window.clearTimeout(fallback);
  }, [trackIndex, transitionEnabled, resetToStart]);

  const handleTrackTransitionEnd = (event) => {
    if (event.propertyName !== "transform") return;
    if (event.target !== event.currentTarget) return;
    if (trackIndex !== CLONE_INDEX) return;

    resetToStart();
  };

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
          <div key={`banner-slide-${index}`} className="summer-pause__banner-slide">
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
