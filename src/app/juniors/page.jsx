import JuniorsHero from "@/components/JuniorsHero";
import SectionPage from "@/components/SectionPage";
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
      <div className="page-content-stack">
        <SectionPage
          label="Seasonal"
          title="Juniors"
          subtitle="Seasonal edits and considered capsules shaped by fabric, form, and modern restraint."
        >
          <p className="section-page__intro">
            Browse our latest juniors — cohesive stories in linen, cotton, and
            lightweight textures designed to layer effortlessly.
          </p>
        </SectionPage>
        <Footer />
      </div>
      <Navbar overlay />
    </main>
  );
}
