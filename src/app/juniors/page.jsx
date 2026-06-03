import SectionPage from "@/components/SectionPage";

export const metadata = {
  title: "Juniors | VELOR",
  description: "Explore VELOR juniors.",
};

export default function JuniorsPage() {
  return (
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
  );
}
