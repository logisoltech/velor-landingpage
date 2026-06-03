import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Women | VELOR",
  description: "Discover women's collections at VELOR.",
};

export default function WomenPage() {
  return (
    <main className="page-main">
      <Hero />
      <div className="page-content-stack">
        <div className="section-page__body">
          <div className="section-page__container">
            <p className="section-page__intro">
              Explore curated womenswear crafted from premium materials — from
              everyday staples to statement pieces for the season ahead.
            </p>
          </div>
        </div>
        <Footer />
      </div>
      <Navbar overlay />
    </main>
  );
}
