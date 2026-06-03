"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const LEFT_LINKS = [
  { label: "WOMEN", href: "/women" },
  { label: "MEN", href: "/men" },
  { label: "COLLECTIONS", href: "/collections" },
  { label: "JOURNAL", href: "/journal" },
];

const RIGHT_LINKS = [
  { label: "SEARCH", href: "#search" },
  { label: "ACCOUNT", href: "#account" },
  { label: "BAG (0)", href: "#bag" },
];

const TOP_THRESHOLD = 20;
const SCROLL_DELTA = 4;
const UP_ACCUM_THRESHOLD = 24;

function NavLink({ href, label, onClick, lightMenu }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`navbar-link ${lightMenu ? "navbar-link--light" : "navbar-link--dark"}`}
    >
      {label}
    </Link>
  );
}

function NavGroup({ links, className, onLinkClick, lightMenu }) {
  return (
    <nav className={className} aria-label="Primary">
      <ul className="navbar-nav-list">
        {links.map((link) => (
          <li key={link.label}>
            <NavLink {...link} onClick={onLinkClick} lightMenu={lightMenu} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Navbar({ overlay = false }) {
  const [navMode, setNavMode] = useState("overlay");
  const [mobileOpen, setMobileOpen] = useState(false);

  const navModeRef = useRef("overlay");
  const lastScrollYRef = useRef(0);
  const pendingUpRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const diff = y - lastScrollYRef.current;
      let mode = navModeRef.current;

      if (y <= TOP_THRESHOLD) {
        mode = "overlay";
        pendingUpRef.current = 0;
      } else if (diff > SCROLL_DELTA) {
        mode = "boxed";
        pendingUpRef.current = 0;
      } else if (diff < -SCROLL_DELTA) {
        pendingUpRef.current += Math.abs(diff);

        if (mode === "boxed" && pendingUpRef.current >= UP_ACCUM_THRESHOLD) {
          mode = "minimal";
          pendingUpRef.current = 0;
        } else if (mode === "minimal" && pendingUpRef.current >= UP_ACCUM_THRESHOLD) {
          mode = "boxed";
          pendingUpRef.current = 0;
        }
      }

      if (mode !== navModeRef.current) {
        navModeRef.current = mode;
        setNavMode(mode);
      }

      lastScrollYRef.current = y;
    };

    lastScrollYRef.current = window.scrollY;
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  const overlayActive = overlay && navMode === "overlay";
  const isMinimal = navMode === "minimal";
  const lineTone = overlayActive ? "light" : "dark";

  const boxClass =
    navMode === "overlay"
      ? "navbar-box--overlay"
      : navMode === "boxed"
        ? "navbar-box--scrolled"
        : "navbar-box--minimal";

  return (
    <>
      <header className="navbar-header">
        <div className="navbar-wrap">
          <div className={`navbar-box ${boxClass}`}>
            <div className={`navbar-desktop ${isMinimal ? "navbar-desktop--minimal" : ""}`}>
              <NavGroup
                links={LEFT_LINKS}
                className="navbar-nav navbar-nav--left"
                lightMenu={overlayActive}
              />

              <Link href="/" className="navbar-logo-link" aria-label="VELOR home">
                <Image
                  src="/velor-logo.png"
                  alt="VELOR"
                  width={1536}
                  height={1024}
                  priority
                  className={`navbar-logo navbar-logo--desktop ${
                    overlayActive ? "navbar-logo--light" : ""
                  }`}
                  sizes="(max-width: 1024px) 330px, 420px"
                />
              </Link>

              <NavGroup
                links={RIGHT_LINKS}
                className="navbar-nav navbar-nav--right"
                lightMenu={overlayActive}
              />
            </div>

            <div className={`navbar-mobile ${isMinimal ? "navbar-mobile--minimal" : ""}`}>
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className={`navbar-menu-toggle navbar-menu-toggle--${lineTone}`}
                aria-label="Open menu"
                aria-expanded={mobileOpen}
              >
                <span className="navbar-menu-toggle-lines">
                  <span
                    className={`navbar-menu-toggle-line navbar-menu-toggle-line--${lineTone}`}
                  />
                  <span
                    className={`navbar-menu-toggle-line navbar-menu-toggle-line--${lineTone}`}
                  />
                  <span
                    className={`navbar-menu-toggle-line navbar-menu-toggle-line--short navbar-menu-toggle-line--${lineTone}`}
                  />
                </span>
              </button>

              <Link
                href="/"
                className="navbar-mobile-logo-link"
                aria-label="VELOR home"
              >
                <Image
                  src="/velor-logo.png"
                  alt="VELOR"
                  width={1536}
                  height={1024}
                  priority
                  className={`navbar-logo navbar-logo--mobile ${
                    overlayActive ? "navbar-logo--light" : ""
                  }`}
                  sizes="260px"
                />
              </Link>

              <Link
                href="#bag"
                className={`navbar-bag navbar-bag--${lineTone}`}
              >
                BAG (0)
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`navbar-mobile-overlay ${
          mobileOpen
            ? "navbar-mobile-overlay--open"
            : "navbar-mobile-overlay--closed"
        }`}
        aria-hidden={!mobileOpen}
      >
        <button
          type="button"
          onClick={closeMobile}
          className={`navbar-mobile-backdrop ${
            mobileOpen
              ? "navbar-mobile-backdrop--open"
              : "navbar-mobile-backdrop--closed"
          }`}
          aria-label="Close menu"
        />

        <aside
          className={`navbar-mobile-panel ${
            mobileOpen
              ? "navbar-mobile-panel--open"
              : "navbar-mobile-panel--closed"
          }`}
        >
          <button
            type="button"
            onClick={closeMobile}
            className="navbar-mobile-close"
          >
            Close
          </button>

          <nav className="navbar-mobile-nav" aria-label="Mobile">
            <div>
              <p className="navbar-mobile-section-label">Shop</p>
              <ul className="navbar-mobile-list">
                {LEFT_LINKS.map((link) => (
                  <li key={link.label}>
                    <NavLink {...link} onClick={closeMobile} lightMenu={false} />
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="navbar-mobile-section-label">Account</p>
              <ul className="navbar-mobile-list">
                {RIGHT_LINKS.map((link) => (
                  <li key={link.label}>
                    <NavLink {...link} onClick={closeMobile} lightMenu={false} />
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </aside>
      </div>
    </>
  );
}
