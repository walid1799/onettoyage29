import heroImg from "../assets/hero.jpg";
import Navbar from "../components/Navbar";

export default function Hero() {
  return (
    <section id="accueil" className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
      <Navbar />

      <div className="hero__overlay" />
      <div className="hero__content">
        <h1 className="hero__title">Un nettoyage impeccable pour un environnement sain</h1>
        <a className="hero__cta" href="#bienvenue">Découvrir</a>
      </div>
    </section>
  );
}
