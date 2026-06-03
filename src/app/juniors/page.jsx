import JuniorsHero from "@/components/JuniorsHero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Juniors | VELOR",
  description: "Explore VELOR juniors.",
};

export default function JuniorsPage() {
  return (
    <main className="page-main juniors-page">
      <JuniorsHero />
      <Footer />
      <Navbar overlay />
    </main>
  );
}
