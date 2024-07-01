import React from 'react';
import { Button } from 'react-bootstrap';

const FooterCmpt = () => {
  return (
    <>
    <footer className="footer text-light py-3 mt-5">
      <div className="container">
          <div className="row">
              <div className="col-3">
                  <p>Adresse:</p>
                  <p>
                    70 rue de Flers<br/>
                    59800 Lille, France
                  </p>
              </div>
              <div className="col-3">
                  <p>Horaires d&apos;ouverture:</p>
                  <p>
                    du mercredi au samedi<br/>
                    de 9h30 à 18h30
                  </p>
              </div>
              <div className="col-6 text-center">
                  <Button variant='light' href="/about_us" className="mx-1 mb-2">A propos de nous</Button>
                  <Button variant='light' href="/help_us" className="mx-1 mb-2">Nous aider</Button>
                  <Button variant='light' href="/contact_us" className="mx-1 mb-2">Contactez nous</Button>
                  <Button variant='link' href="https://www.facebook.com/lespotesenciel/?locale=fr_FR" className="text-light d-block">Suivez-nous <i className="bi bi-facebook"></i></Button>
              </div>
          </div>
      </div>
      <div className="row">
        <div className="col-12 text-center copyright">
            <p className="mb-0">&copy; Les Potes En Ciel 2024 - Réalisation: Amandine Kemp</p>
        </div>
    </div>
    </footer>
    </>
  );
}

export default FooterCmpt;