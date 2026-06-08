"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { bannerSlides } from "@/data/summerPauseAssets";

const SLIDE_INTERVAL_MS = 3000;
const TRANSITION_MS = 1100;
const COPY_EXIT_MS = 180;
const COPY_ENTER_MS = 450;
const CLONE_INDEX = bannerSlides.length;

export default function SummerPauseBanner() {
  const [trackIndex, setTrackIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [copyPhase, setCopyPhase] = useState("enter-from");
  const resetPendingRef = useRef(false);

  const extendedSlides = useMemo(
    () => [...bannerSlides, bannerSlides[0]],
    []
  );

  const activeSlide = bannerSlides[displayIndex];

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

  useEffect(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setCopyPhase("enter"));
    });
  }, []);

  useEffect(() => {
    if (copyPhase !== "enter") return undefined;

    const timer = window.setTimeout(() => setCopyPhase("idle"), COPY_ENTER_MS);
    return () => window.clearTimeout(timer);
  }, [copyPhase]);

  useEffect(() => {
    const nextIndex = trackIndex % bannerSlides.length;
    if (nextIndex === displayIndex) return undefined;

    setCopyPhase("exit");

    const exitTimer = window.setTimeout(() => {
      setDisplayIndex(nextIndex);
      setCopyPhase("enter-from");

      requestAnimationFrame(() => {
        requestAnimationFrame(() => setCopyPhase("enter"));
      });
    }, COPY_EXIT_MS);

    return () => window.clearTimeout(exitTimer);
  }, [trackIndex, displayIndex]);

  const handleTrackTransitionEnd = (event) => {
    if (event.propertyName !== "transform") return;
    if (event.target !== event.currentTarget) return;
    if (trackIndex !== CLONE_INDEX) return;

    resetToStart();
  };

  const copyPanelClass = [
    "summer-pause__banner-copy-panel",
    copyPhase === "exit" && "summer-pause__banner-copy-panel--exit",
    copyPhase === "enter-from" && "summer-pause__banner-copy-panel--enter-from",
    (copyPhase === "enter" || copyPhase === "idle") &&
      "summer-pause__banner-copy-panel--enter",
  ]
    .filter(Boolean)
    .join(" ");

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
        {extendedSlides.map((slide, index) => (
          <div key={`banner-slide-${index}`} className="summer-pause__banner-slide">
            <img
              src={slide.image}
              alt=""
              className="summer-pause__banner-image"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
            <div className="summer-pause__banner-scrim" aria-hidden="true" />
          </div>
        ))}
      </div>

      <div className="summer-pause__banner-content" aria-live="polite">
        <div className={copyPanelClass}>
          <Link href={activeSlide.buttonHref} className="summer-pause__banner-cta">
            {activeSlide.buttonLabel}
            <span className="summer-pause__banner-cta-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
