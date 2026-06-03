import HeroSlider from "@/components/HeroSlider";
import { JUNIORS_HERO_CONTENT, juniorsSlides } from "@/data/juniorsHeroAssets";

export default function JuniorsHero() {
  return (
    <HeroSlider
      slides={juniorsSlides}
      slideshowLabel={JUNIORS_HERO_CONTENT.slideshowLabel}
      fixed={false}
      
    />
  );
}
