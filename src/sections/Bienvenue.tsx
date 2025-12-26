export default function Bienvenue() {
  return (
    <section id="bienvenue" className="welcome">
      <div className="welcome__inner">
        <h2 className="welcome__title">Bienvenue chez O&apos;nettoyage29</h2>

        <p className="welcome__intro">
          O&apos;nettoyage29 est une entreprise de services de nettoyage basée à Brest, en France.
          Nous nous engageons à fournir un travail de qualité pour un environnement propre et sain.
        </p>

        <h3 className="welcome__subtitle">
          O&apos;Nettoyage 29 – Votre partenaire propreté et remise en état
        </h3>

        <p className="welcome__text">
          Chez O&apos;Nettoyage 29, nous mettons notre savoir-faire au service des particuliers et professionnels
          pour redonner à vos logements et locaux toute leur propreté et leur confort.
        </p>

        <h4 className="welcome__h4">Nos prestations principales :</h4>
        <ul className="welcome__list">
          <li>Entretien ménager régulier ou ponctuel</li>
          <li>Remise en état complète après sinistre, déménagement ou location</li>
          <li>Nettoyage de fin de chantier</li>
          <li>Intervention en cas de syndrome de Diogène</li>
          <li>Décapage haute pression</li>
          <li>Nettoyage de vitres</li>
        </ul>

        <h4 className="welcome__h4">Nos services complémentaires :</h4>
        <p className="welcome__text">
          Parce que nous savons que la remise en état d&apos;un logement ne s&apos;arrête pas au nettoyage,
          nous vous proposons également :
            <ul className="welcome__list">
                <li>Petits travaux de rénovation : peinture, plomberie, électricité légère</li>
                <li>Débarras et évacuation de tout ce qui doit partir à la déchèterie</li>
                <li>Montage de meubles et installation d&apos;équipements divers</li>
                <li>
                    Achat de petit matériel (vaisselle, linge de maison, accessoires…) pour équiper votre logement,
                    notamment en location saisonnière type Airbnb
                </li>
            </ul>
        </p>

        <h4 className="welcome__h4">Notre engagement :</h4>
        <p className="welcome__text">
          Avec O&apos;Nettoyage 29, vous n&apos;avez rien à gérer. Nous prenons tout en charge pour que votre bien
          soit prêt à être loué, habité ou valorisé, sans que vous ayez à vous déplacer.
        </p>

        <div className="welcome__cta">
          <span className="welcome__ctaLine">
            Contactez-nous dès aujourd&apos;hui pour un <strong>DEVIS GRATUIT</strong> :
            <ul>
                <li><div className="welcome__contact">
                    📞 <a href="tel:+33780615583"> 07 80 61 55 83</a> | <a href="tel:+33780307119">07 80 30 71 19</a>
                </div></li>
                <li><div className="welcome__contact">
                    ✉️  <a href="mailto:O-nettoyage29@outlook.fr">O-nettoyage29@outlook.fr</a>
                </div></li>
            </ul>
          </span>
        </div>
      </div>
    </section>
  );
}
