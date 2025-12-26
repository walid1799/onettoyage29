export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <div className="nav__brand">O&apos;NETTOYAGE29</div>

        <nav className="nav__links" aria-label="Navigation principale">
          <a className="nav__link" href="#accueil">ACCUEIL</a>
          <a className="nav__link" href="#services">NOS SERVICES</a>
          <a className="nav__link" href="#contact">CONTACT</a>
        </nav>
      </div>
    </header>
  );
}
