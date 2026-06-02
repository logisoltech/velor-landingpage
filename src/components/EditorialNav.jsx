const CATEGORIES = [
  { id: "t-shirts", label: "T-Shirts" },
  { id: "pants", label: "Pants" },
  { id: "sweatshirts", label: "Sweatshirts" },
  { id: "shirts", label: "Shirts" },
  { id: "jackets", label: "Jackets" },
  { id: "blazers", label: "Blazers" },
  { id: "polo-shirts", label: "Polo Shirts" },
  { id: "bags", label: "Bags" },
  { id: "accessories", label: "Accessories" },
  { id: "shorts", label: "Shorts" },
];

function CategorySequence({ duplicate = false }) {
  return (
    <div
      className="editorial-nav__sequence"
      aria-hidden={duplicate || undefined}
    >
      {CATEGORIES.map((item, index) => (
        <span key={`${item.id}-${duplicate ? "dup" : "orig"}`} className="editorial-nav__item">
          {index > 0 ? (
            <span className="editorial-nav__comma" aria-hidden="true">
              &nbsp;|&nbsp;
            </span>
          ) : null}
          <button type="button" className="editorial-nav__word" tabIndex={duplicate ? -1 : 0}>
            {item.label}
          </button>
        </span>
      ))}
      <span className="editorial-nav__separator" aria-hidden="true">
        {" "}
        •{" "}
      </span>
    </div>
  );
}

export default function EditorialNav() {
  return (
    <section className="editorial-nav" aria-label="Shop by category">
      <div className="editorial-nav__viewport">
        <div className="editorial-nav__track">
          <CategorySequence />
          <CategorySequence duplicate />
        </div>
      </div>
    </section>
  );
}
