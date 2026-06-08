import { pauseEditorialImages } from "@/data/pauseEditorialImages";

const CIRCLE_ITEM = pauseEditorialImages.find((item) => item.isCircle);
const GRID_ITEMS = pauseEditorialImages.filter((item) => !item.isCircle);

function EditorialFigure({ item, duplicate = false }) {
  return (
    <figure
      className={`pause-editorial__item pause-editorial__item--${item.className}`}
    >
      <div className="pause-editorial__media">
        <img
          src={item.image}
          alt={duplicate ? "" : item.alt}
          className="pause-editorial__image"
          loading="lazy"
          decoding="async"
          aria-hidden={duplicate || undefined}
        />
      </div>
      <span className="pause-editorial__number">{item.id}</span>
    </figure>
  );
}

function EditorialStage({ duplicate = false }) {
  return (
    <div
      className="pause-editorial__stage"
      aria-hidden={duplicate || undefined}
    >
      <div className="pause-editorial__grid">
        {GRID_ITEMS.map((item) => (
          <EditorialFigure
            key={duplicate ? `${item.id}-dup` : item.id}
            item={item}
            duplicate={duplicate}
          />
        ))}
      </div>

      {CIRCLE_ITEM ? (
        <figure className="pause-editorial__float pause-editorial__float--circle">
          <img
            src={CIRCLE_ITEM.image}
            alt={duplicate ? "" : CIRCLE_ITEM.alt}
            className="pause-editorial__circle"
            loading="lazy"
            decoding="async"
            aria-hidden={duplicate || undefined}
          />
          <span className="pause-editorial__number">{CIRCLE_ITEM.id}</span>
        </figure>
      ) : null}
    </div>
  );
}

export default function PauseEditorialGrid() {
  return (
    <div
      className="pause-editorial"
      id="summer-pause-heading"
      aria-label="Editorial lookbook"
    >
      <div className="pause-editorial__marquee">
        <div className="pause-editorial__track">
          <EditorialStage />
          <EditorialStage duplicate />
        </div>
      </div>
    </div>
  );
}
