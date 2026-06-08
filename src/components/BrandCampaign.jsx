export default function BrandCampaign() {
  return (
    <section className="brand-campaign" aria-labelledby="brand-campaign-season">
      <div className="brand-campaign__container">
        <p className="brand-campaign__eyebrow">VELOR presents</p>

        <img
          src="/aftersli.svg"
          alt=""
          className="brand-campaign__artwork"
          width={633}
          height={230}
          decoding="async"
        />

        <p id="brand-campaign-season" className="brand-campaign__season">
          Spring Summer 2026
        </p>
      </div>
    </section>
  );
}
