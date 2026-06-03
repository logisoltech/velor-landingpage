import HeroSlider from "@/components/HeroSlider";
import { WOMEN_HERO_CONTENT, WOMEN_HERO_SLIDES } from "@/data/womenHeroAssets";

export default function WomenHero() {
  return (
    <HeroSlider
      slides={WOMEN_HERO_SLIDES}
      title={WOMEN_HERO_CONTENT.title}
      textLines={WOMEN_HERO_CONTENT.textLines}
      slideshowLabel={WOMEN_HERO_CONTENT.slideshowLabel}
    />
  );
}
