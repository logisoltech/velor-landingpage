"use client";

import { useCallback, useState } from "react";
import {
  categoryById,
  editorialCategoryLines,
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

export default function EditorialNav() {
  const [activeId, setActiveId] = useState(null);

  const displayCategory =
    categoryById[activeId] ?? defaultCategory;

  const handleCategoryEnter = useCallback((id) => {
    setActiveId(id);
  }, []);

  const handleSectionLeave = useCallback(() => {
    setActiveId(null);
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
          {editorialCategoryLines.map((line, lineIndex) => (
            <p
              key={`editorial-line-${lineIndex}`}
              className="editorial-nav__line"
            >
              {line.map((item) => (
                <span key={item.id} className="editorial-nav__phrase">
                  <CategoryWord
                    id={item.id}
                    suffix={item.suffix}
                    activeId={activeId}
                    onCategoryEnter={handleCategoryEnter}
                  />
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
