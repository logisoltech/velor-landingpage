import Image from "next/image";
import Link from "next/link";

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

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "#instagram",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.25" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.25" />
        <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "#pinterest",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.25" />
        <path
          d="M12 8.5c-1.2 0-2.2.9-2.2 2.4 0 .9.4 1.5.9 1.8-.1.7-.3 1.6-.3 2.3 0 .2.1.3.3.3.8 0 1.7-1.1 2.1-2.2.2-.5.1-.8-.1-1.1-.2-.4-.3-.8-.3-1.3 0-1.1.8-2 2.1-2 1.1 0 1.9.8 1.9 1.9 0 1.3-.5 2.4-1.3 2.4-.4 0-.7-.3-.6-.7.1-.3.2-.6.2-.9.1-.4.3-.9.3-1.2 0-.5-.3-.9-.9-.9-.7 0-1.3.8-1.3 1.8 0 .7.2 1.1.2 1.1l-.8 3.4"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#facebook",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.25" />
        <path
          d="M14 8h-1.5A1.5 1.5 0 0011 9.5V11H9v2.5h2V18h2.5v-4.5H16l.5-2.5H13.5V9.8c0-.4.3-.8.8-.8H15V8z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:hello@velor.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.25" />
        <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function FooterNavColumn({ title, links }) {
  return (
    <div className="footer__column">
      <h3 className="footer__heading">{title}</h3>
      <ul className="footer__links">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="footer__link">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
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

          <FooterNavColumn title="SHOP" links={SHOP_LINKS} />
          <FooterNavColumn title="CUSTOMER CARE" links={CUSTOMER_CARE_LINKS} />
          <FooterNavColumn title="ABOUT" links={ABOUT_LINKS} />

          <div className="footer__column footer__connect">
            <h3 className="footer__heading">CONNECT</h3>
            <p className="footer__connect-text">
              Join our community for early access, stories, and timeless
              inspiration.
            </p>
            <form className="footer__newsletter" action="#" method="post">
              <label htmlFor="footer-email" className="footer__sr-only">
                Email address
              </label>
              <div className="footer__newsletter-field">
                <input
                  id="footer-email"
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
            <ul className="footer__social">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <Link
                    href={social.href}
                    className="footer__social-link"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
