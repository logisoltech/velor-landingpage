import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import FooterAccordion from "@/components/FooterAccordion";

const SOCIAL_ICON_SIZE = 21;

const SHOP_LINKS = [
  { label: "New In", href: "#new-in" },
  { label: "Shirts", href: "#shirts" },
  { label: "Trousers", href: "#trousers" },
  { label: "Polos", href: "#polos" },
  { label: "T-Shirts", href: "#t-shirts" },
  { label: "Denim", href: "#denim" },
  { label: "Loungewear", href: "#loungewear" },
  { label: "Accessories", href: "#accessories" },
  { label: "Gift Cards", href: "#gift-cards" },
];

const CUSTOMER_CARE_LINKS = [
  { label: "FAQs", href: "#faqs" },
  { label: "Shipping & Delivery", href: "#shipping" },
  { label: "Returns & Exchanges", href: "#returns" },
  { label: "Order Tracking", href: "#tracking" },
  { label: "Size Guide", href: "#size-guide" },
  { label: "Care Guide", href: "#care-guide" },
  { label: "Contact Us", href: "#contact" },
];

const ABOUT_LINKS = [
  { label: "Our Story", href: "#our-story" },
  { label: "Our Craft", href: "#our-craft" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Journal", href: "#journal" },
  { label: "Careers", href: "#careers" },
  { label: "Stores", href: "#stores" },
];

function FooterLinkList({ links }) {
  return (
    <ul className="footer__links">
      {links.map((link) => (
        <li key={link.label}>
          <Link href={link.href} className="footer__link">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function FooterNavColumn({ title, links }) {
  return (
    <div className="footer__column">
      <h3 className="footer__heading">{title}</h3>
      <FooterLinkList links={links} />
    </div>
  );
}

function FooterSocialLinks() {
  return (
    <ul className="footer__social">
      <li>
        <Link
          href="#instagram"
          className="footer__social-link footer__social-link--instagram"
          aria-label="Instagram"
        >
          <FaInstagram size={SOCIAL_ICON_SIZE} aria-hidden="true" />
        </Link>
      </li>
      <li>
        <Link
          href="#pinterest"
          className="footer__social-link footer__social-link--pinterest"
          aria-label="Pinterest"
        >
          <FaPinterest size={SOCIAL_ICON_SIZE} aria-hidden="true" />
        </Link>
      </li>
      <li>
        <Link
          href="#facebook"
          className="footer__social-link footer__social-link--facebook"
          aria-label="Facebook"
        >
          <FaFacebook size={SOCIAL_ICON_SIZE} aria-hidden="true" />
        </Link>
      </li>
      <li>
        <Link
          href="mailto:hello@velor.com"
          className="footer__social-link footer__social-link--email"
          aria-label="Email"
        >
          <MdEmail size={SOCIAL_ICON_SIZE} aria-hidden="true" />
        </Link>
      </li>
    </ul>
  );
}

function FooterConnectContent({ compact = false }) {
  const emailInputId = compact ? "footer-email-mobile" : "footer-email";

  return (
    <>
      <p
        className={`footer__connect-text ${compact ? "footer__connect-text--compact" : ""}`}
      >
        Join our community for early access, stories, and timeless inspiration.
      </p>
      <form
        className={`footer__newsletter ${compact ? "footer__newsletter--compact" : ""}`}
        action="#"
        method="post"
      >
        <label htmlFor={emailInputId} className="footer__sr-only">
          Email address
        </label>
        <div className="footer__newsletter-field">
          <input
            id={emailInputId}
            type="email"
            name="email"
            placeholder="Enter your email"
            className="footer__newsletter-input"
            autoComplete="email"
          />
          <button
            type="submit"
            className="footer__newsletter-submit"
            aria-label="Subscribe to newsletter"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </form>
      <FooterSocialLinks />
    </>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link href="/" className="footer__logo-link" aria-label="VELOR home">
              <Image
                src="/velor-logo.png"
                alt="VELOR"
                width={1536}
                height={1024}
                className="footer__logo"
                sizes="(max-width: 767px) 140px, (max-width: 1023px) 160px, 170px"
              />
            </Link>
            <p className="footer__brand-text">
              Timeless pieces, thoughtfully made from the world&apos;s finest
              linen. Rooted in heritage. Designed for modern life.
            </p>
            <hr className="footer__divider" />
            <Link href="#journal" className="footer__journal-link">
              JOURNAL
              <span className="footer__journal-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>

          <div className="footer__nav-desktop">
            <FooterNavColumn title="SHOP" links={SHOP_LINKS} />
            <FooterNavColumn title="CUSTOMER CARE" links={CUSTOMER_CARE_LINKS} />
            <FooterNavColumn title="ABOUT" links={ABOUT_LINKS} />
            <div className="footer__column footer__connect">
              <h3 className="footer__heading">CONNECT</h3>
              <FooterConnectContent />
            </div>
          </div>

          <div className="footer__nav-mobile">
            <div className="footer__mobile-grid">
              <FooterAccordion title="SHOP">
                <FooterLinkList links={SHOP_LINKS} />
              </FooterAccordion>
              <FooterAccordion title="CUSTOMER CARE">
                <FooterLinkList links={CUSTOMER_CARE_LINKS} />
              </FooterAccordion>
              <FooterAccordion title="ABOUT">
                <FooterLinkList links={ABOUT_LINKS} />
              </FooterAccordion>
              <FooterAccordion title="CONNECT">
                <FooterConnectContent compact />
              </FooterAccordion>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
