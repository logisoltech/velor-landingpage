import HeroSlider from "@/components/HeroSlider";
import { HOME_HERO_CONTENT, HOME_HERO_SLIDES } from "@/data/homeHeroAssets";

export default function HomeHero() {
  return (
    <HeroSlider
      slides={HOME_HERO_SLIDES}
      title={HOME_HERO_CONTENT.title}
      textLines={HOME_HERO_CONTENT.textLines}
      slideshowLabel={HOME_HERO_CONTENT.slideshowLabel}
    />
  );
}
