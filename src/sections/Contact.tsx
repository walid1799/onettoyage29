export default function Contact() {
  return (
    <section id="contact" className="contactSection">
      <div className="contactSection__inner">
        {/* Colonne gauche */}
        <div className="contactSection__left">
          <h2 className="contactSection__title">Contactez-nous</h2>
          <p className="contactSection__intro">
            N&apos;hésitez pas à nous contacter pour toute demande de devis ou pour en savoir plus sur nos
            services de nettoyage.
          </p>

          <form
              className="contactForm"
              action="https://formspree.io/f/xwvkpeqd"
              method="POST"
            >
              <label className="contactForm__label">
                Nom <span className="contactForm__req">*</span>
                <input className="contactForm__input" type="text" name="name" required />
              </label>

              <label className="contactForm__label">
                Adresse e-mail <span className="contactForm__req">*</span>
                <input className="contactForm__input" type="email" name="email" required />
              </label>

              <label className="contactForm__label">
                Message <span className="contactForm__req">*</span>
                <textarea className="contactForm__textarea" name="message" rows={6} required />
              </label>

              {/* optionnel mais utile */}
              <input type="hidden" name="_subject" value="Nouveau message - O'Nettoyage29" />

              <button className="contactForm__btn" type="submit">
                Envoyer le formulaire
              </button>
            </form>
        </div>

        {/* Colonne droite */}
        <div className="contactSection__right">
          <div className="contactMap">
            <iframe
              title="Carte - Brest"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-4.536%2C48.374%2C-4.460%2C48.406&layer=mapnik&marker=48.390%2C-4.486"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <a className="contactSocial" href="#" aria-label="Facebook">
            f
          </a>
        </div>
      </div>
    </section>
  );
}
