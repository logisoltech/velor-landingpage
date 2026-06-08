"use client";

import { useCallback, useState } from "react";
import {
  categoryById,
  editorialMarqueeRows,
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

function MarqueeLineContent({ items, activeId, lineIndex, onCategoryEnter, duplicate = false }) {
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
            onCategoryEnter={() => onCategoryEnter(item.id, lineIndex)}
          />
        </span>
      ))}
    </p>
  );
}

function MarqueeRow({
  lineIndex,
  direction,
  items,
  activeId,
  isPaused,
  onCategoryEnter,
  onRowLeave,
}) {
  return (
    <div className="editorial-nav__marquee">
      <div
        className={`editorial-nav__track editorial-nav__track--${direction}${
          isPaused ? " editorial-nav__track--paused" : ""
        }`}
        onMouseLeave={() => onRowLeave(lineIndex)}
      >
        <MarqueeLineContent
          items={items}
          activeId={activeId}
          lineIndex={lineIndex}
          onCategoryEnter={onCategoryEnter}
        />
        <MarqueeLineContent
          items={items}
          activeId={activeId}
          lineIndex={lineIndex}
          onCategoryEnter={onCategoryEnter}
          duplicate
        />
      </div>
    </div>
  );
}

export default function EditorialNav() {
  const [activeId, setActiveId] = useState(null);
  const [pausedRowIndex, setPausedRowIndex] = useState(null);

  const displayCategory = categoryById[activeId] ?? defaultCategory;

  const handleCategoryEnter = useCallback((id, lineIndex) => {
    setActiveId(id);
    setPausedRowIndex(lineIndex);
  }, []);

  const handleRowLeave = useCallback((lineIndex) => {
    setPausedRowIndex((current) => (current === lineIndex ? null : current));
  }, []);

  const handleSectionLeave = useCallback(() => {
    setActiveId(null);
    setPausedRowIndex(null);
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
          {editorialMarqueeRows.map((row, lineIndex) => (
            <MarqueeRow
              key={`editorial-marquee-${lineIndex}`}
              lineIndex={lineIndex}
              direction={row.direction}
              items={row.items}
              activeId={activeId}
              isPaused={pausedRowIndex === lineIndex}
              onCategoryEnter={handleCategoryEnter}
              onRowLeave={handleRowLeave}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
