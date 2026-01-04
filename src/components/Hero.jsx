export default function Hero() {
  return (
    <section className="hero">
      <img
        src={`${process.env.PUBLIC_URL}/images/beach-sand-surface-with-ice-cubes - water-droplets-.jpg`}
        alt="Chill Coffee на пляже"
        className="hero-bg"
      />
      <div className="hero-overlay">
        <h2>CHILL-COFFEE</h2>
        <p>Свежий, охлаждающий Espresso Tonic</p>
        <p className="subtitle">Идеально для жаркого дня</p>
      </div>
    </section>
  );
}
