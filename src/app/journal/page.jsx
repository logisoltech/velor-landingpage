import SectionPage from "@/components/SectionPage";

export const metadata = {
  title: "Journal | VELOR",
  description: "Stories, craft, and inspiration from VELOR.",
};

export default function JournalPage() {
  return (
    <SectionPage
      label="Editorial"
      title="Journal"
      subtitle="Stories on craft, material, and the quiet rituals behind timeless dressing."
    >
      <p className="section-page__intro">
        Read editorials on design, sustainability, and the people who bring
        each VELOR piece to life — coming soon.
      </p>
    </SectionPage>
  );
}
