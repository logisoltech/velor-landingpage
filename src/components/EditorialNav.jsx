"use client";

import { useCallback, useState } from "react";
import {
  categoryById,
  editorialMarqueeItems,
  interactiveCategories,
} from "@/data/interactiveCategories";

const defaultCategory = interactiveCategories[0];

function CategoryWord({ id, suffix, activeId, onCategoryEnter }) {
  const category = categoryById[id];
  if (!category) return null;

  const isActive = activeId === id;

  return (
    <>
      <button
        type="button"
        className={`editorial-nav__word ${
          isActive ? "editorial-nav__word--active" : ""
        }`}
        onMouseEnter={() => onCategoryEnter(id)}
        onFocus={() => onCategoryEnter(id)}
      >
        {category.label}
      </button>
      {suffix ? (
        <span className="editorial-nav__suffix" aria-hidden="true">
          {suffix}
        </span>
      ) : null}
    </>
  );
}

function MarqueeLineContent({ items, activeId, onCategoryEnter, duplicate = false }) {
  return (
    <p
      className="editorial-nav__line editorial-nav__line-content"
      aria-hidden={duplicate || undefined}
    >
      {items.map((item, itemIndex) => (
        <span
          key={`${item.id}-${duplicate ? "dup" : "orig"}-${itemIndex}`}
          className="editorial-nav__phrase"
        >
          <CategoryWord
            id={item.id}
            suffix={item.suffix}
            activeId={activeId}
            onCategoryEnter={onCategoryEnter}
          />
        </span>
      ))}
    </p>
  );
}

export default function EditorialNav() {
  const [activeId, setActiveId] = useState(null);
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);

  const displayCategory = categoryById[activeId] ?? defaultCategory;

  const handleCategoryEnter = useCallback((id) => {
    setActiveId(id);
    setIsMarqueePaused(true);
  }, []);

  const handleMarqueeLeave = useCallback(() => {
    setIsMarqueePaused(false);
  }, []);

  const handleSectionLeave = useCallback(() => {
    setActiveId(null);
    setIsMarqueePaused(false);
  }, []);

  return (
    <section
      className="editorial-nav"
      aria-label="Shop by category"
      onMouseLeave={handleSectionLeave}
    >
      <div className="editorial-nav__inner">
        <div className="editorial-nav__image-stage" aria-hidden="true">
          <img
            key={displayCategory.id}
            src={displayCategory.image}
            alt=""
            className="editorial-nav__model-image"
            decoding="async"
          />
        </div>

        <div className="editorial-nav__cloud">
          <div className="editorial-nav__marquee">
            <div
              className={`editorial-nav__track${
                isMarqueePaused ? " editorial-nav__track--paused" : ""
              }`}
              onMouseLeave={handleMarqueeLeave}
            >
              <MarqueeLineContent
                items={editorialMarqueeItems}
                activeId={activeId}
                onCategoryEnter={handleCategoryEnter}
              />
              <MarqueeLineContent
                items={editorialMarqueeItems}
                activeId={activeId}
                onCategoryEnter={handleCategoryEnter}
                duplicate
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
