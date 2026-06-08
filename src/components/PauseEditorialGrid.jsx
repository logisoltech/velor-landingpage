import { pauseEditorialImages } from "@/data/pauseEditorialImages";

function EditorialFigure({ item }) {
  return (
    <figure
      className={`pause-editorial__item pause-editorial__item--${item.className}`}
    >
      <div className="pause-editorial__media">
        <img
          src={item.image}
          alt={item.alt}
          className="pause-editorial__image"
          loading="lazy"
          decoding="async"
        />
      </div>
      <span className="pause-editorial__number">{item.id}</span>
    </figure>
  );
}

export default function PauseEditorialGrid() {
  return (
    <div
      className="pause-editorial"
      id="summer-pause-heading"
      aria-label="Editorial lookbook"
    >
      <div className="pause-editorial__grid">
        {pauseEditorialImages.map((item) => (
          <EditorialFigure key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
