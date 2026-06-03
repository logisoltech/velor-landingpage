import SectionPage from "@/components/SectionPage";

export const metadata = {
  title: "Men | VELOR",
  description: "Discover men's collections at VELOR.",
};

export default function MenPage() {
  return (
    <SectionPage
      label="Shop"
      title="Men"
      subtitle="Tailored simplicity and relaxed structure for a wardrobe that moves with intention."
    >
      <p className="section-page__intro">
        Discover menswear built on clean lines and lasting quality — versatile
        layers, refined shirting, and essentials made for daily wear.
      </p>
    </SectionPage>
  );
}
