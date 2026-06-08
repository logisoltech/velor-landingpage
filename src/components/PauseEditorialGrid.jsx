import { pauseEditorialImages } from "@/data/pauseEditorialImages";

const CIRCLE_ITEM = pauseEditorialImages.find((item) => item.isCircle);
const GRID_ITEMS = pauseEditorialImages.filter((item) => !item.isCircle);

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
      <div className="pause-editorial__stage">
        <div className="pause-editorial__grid">
          {GRID_ITEMS.map((item) => (
            <EditorialFigure key={item.id} item={item} />
          ))}
        </div>

        {CIRCLE_ITEM ? (
          <figure className="pause-editorial__float pause-editorial__float--circle">
            <img
              src={CIRCLE_ITEM.image}
              alt={CIRCLE_ITEM.alt}
              className="pause-editorial__circle"
              loading="lazy"
              decoding="async"
            />
            <span className="pause-editorial__number">{CIRCLE_ITEM.id}</span>
          </figure>
        ) : null}
      </div>
    </div>
  );
}
