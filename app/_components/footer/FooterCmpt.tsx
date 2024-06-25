import React from 'react';

const FooterCmpt = () => {
  return (
    <>
    <footer className="footer text-light py-3 mt-5">
      <div className="container">
          <div className="row">
              <div className="col-md-4">
                  <p>Adresse:</p>
                  <p>70 rue de Flers</p>
                  <p>59800 Lille, France</p>
              </div>
              <div className="col-md-4">
                  <p>Horaires:</p>
                  <p>ouvert du mercredi au samedi</p>
                  <p>de 9h30 à 18h30</p>
              </div>
              <div className="col-md-4 text-center">
                  <a href="/about_us" className="btn btn-light mx-1">A propos de nous</a>
                  <a href="/help_us" className="btn btn-light mx-1">Nous aider</a>
                  <a href="/contact_us" className="btn btn-light mx-1">Contactez nous</a>
                  <a href="https://www.facebook.com/lespotesenciel/?locale=fr_FR" className="btn btn-link text-light d-block mt-2">Suivez-nous <i className="bi bi-facebook"></i></a>
              </div>
          </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
            <p className="mb-0">&copy; Les Potes En Ciel 2024 - Réalisation: Amandine Kemp</p>
        </div>
    </div>
    </footer>
    </>
  );
}

export default FooterCmpt;