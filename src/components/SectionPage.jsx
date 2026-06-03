import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function SectionPage({
  title,
  subtitle,
  label = "VELOR",
  children = null,
}) {
  return (
    <main className="section-page">
      <section className="section-hero" aria-labelledby="section-hero-title">
        <div className="section-hero__overlay" aria-hidden="true" />
        <div className="section-hero__content">
          <p className="section-hero__label">{label}</p>
          <h1 id="section-hero-title" className="section-hero__title">
            {title}
          </h1>
          <p className="section-hero__subtitle">{subtitle}</p>
        </div>
      </section>

      <div className="section-page__body">
        <div className="section-page__container">{children}</div>
      </div>

      <Footer />
      <Navbar overlay />
    </main>
  );
}
