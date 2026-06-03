import HomeHero from "@/components/HomeHero";
import Mission from "@/components/Mission";
import CategoryShowcase from "@/components/CategoryShowcase";
import MustHaves from "@/components/MustHaves";
import EditorialNav from "@/components/EditorialNav";
import SummerPause from "@/components/SummerPause";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="page-main">
      <HomeHero />
      <div className="page-content-stack">
        {/* <Mission /> */}
        <CategoryShowcase />
        <MustHaves />
        <EditorialNav />
        <SummerPause />
        <Footer />
      </div>
      <Navbar overlay />
    </main>
  );
}
