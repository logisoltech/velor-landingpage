import SectionPage from "@/components/SectionPage";

export const metadata = {
  title: "Collections | VELOR",
  description: "Explore VELOR seasonal collections.",
};

export default function CollectionsPage() {
  return (
    <SectionPage
      label="Seasonal"
      title="Collections"
      subtitle="Seasonal edits and considered capsules shaped by fabric, form, and modern restraint."
    >
      <p className="section-page__intro">
        Browse our latest collections — cohesive stories in linen, cotton, and
        lightweight textures designed to layer effortlessly.
      </p>
    </SectionPage>
  );
}
