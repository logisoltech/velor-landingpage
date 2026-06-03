"use client";

import { useState } from "react";

export default function FooterAccordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`footer__accordion ${open ? "footer__accordion--open" : ""}`}
    >
      <button
        type="button"
        className="footer__accordion-trigger"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span>{title}</span>
        <span className="footer__accordion-icon" aria-hidden="true">
          {open ? "−" : "+"}
        </span>
      </button>
      <div className="footer__accordion-panel">{children}</div>
    </div>
  );
}
