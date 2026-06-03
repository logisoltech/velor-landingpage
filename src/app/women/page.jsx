import WomenHero from "@/components/WomenHero";
import CategoryStrip from "@/components/CategoryStrip";
import CategoriesInFocus from "@/components/CategoriesInFocus";
import DenimFeature from "@/components/DenimFeature";
import EditorialBanners from "@/components/EditorialBanners";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Women | VELOR",
  description: "Discover women's collections at VELOR.",
};

export default function WomenPage() {
  return (
    <main className="page-main women-page">
      <WomenHero />
      <div className="page-content-stack">
        <CategoryStrip />
        <CategoriesInFocus />
        <DenimFeature />
        <EditorialBanners />
        <Footer />
      </div>
      <Navbar overlay />
    </main>
  );
}
