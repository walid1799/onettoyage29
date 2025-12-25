import bureauxImg from "../assets/services/bureaux.jpg";
import complementairesImg from "../assets/services/complementaires.jpg";
import menageImg from "../assets/services/menage.jpg";

type Service = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    title: "Nettoyage de bureaux",
    subtitle: "Nettoyage complet pour un espace de travail productif",
    description:
      "Entretien régulier des locaux : sols, sanitaires, surfaces, poubelles, espaces communs.",
    image: bureauxImg,
  },
  {
    title: "Services complémentaires",
    subtitle: "Maintenance & petits travaux",
    description:
      "Petits travaux (peinture, plomberie, électricité légère), débarras & évacuation, montage de meubles, achats de petit matériel.",
    image: complementairesImg,
  },
  {
    title: "Entretien ménager",
    subtitle: "Entretien ménager régulier ou ponctuel",
    description:
      "Balayage et lavage des sols, dépoussiérage, nettoyage des sanitaires, désinfection, vitres, prestations avant/après événement.",
    image: menageImg,
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services__inner">
        <h2 className="services__title">Nos services</h2>

        <div className="services__grid">
          {services.map((s) => (
            <article key={s.title} className="serviceCard">
              <div className="serviceCard__media">
                <img className="serviceCard__img" src={s.image} alt={s.title} />
              </div>

              <h3 className="serviceCard__title">{s.title}</h3>
              <p className="serviceCard__subtitle">{s.subtitle}</p>
              <p className="serviceCard__desc">{s.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
