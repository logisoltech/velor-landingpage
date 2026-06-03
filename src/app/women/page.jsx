import WomenHero from "@/components/WomenHero";
import CategoryTiles from "@/components/CategoryTiles";
import CategoriesInFocus from "@/components/CategoriesInFocus";
import DenimFeature from "@/components/DenimFeature";
import EditorialBanners from "@/components/EditorialBanners";
import WomenMustHaves from "@/components/WomenMustHaves";
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
      <CategoryTiles />
      <div className="page-content-stack">
        <CategoriesInFocus />
        <DenimFeature />
        <EditorialBanners />
        <WomenMustHaves />
        <Footer />
      </div>
      <Navbar overlay />
    </main>
  );
}
