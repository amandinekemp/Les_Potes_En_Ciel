import { Metadata } from "next";
import Image from 'next/image';
import logo_img from '/public/logo_lpec.png';

export const metadata: Metadata = {
  title: "Landing Page - Les potes en ciel",
  description: "Landing Page - Les Potes En Ciel",
};

import React from 'react';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="landing">
      <div className="banner">
        <Image src={logo_img} alt="LPEC logo" className="bannerLogo" />
      </div>
      
      <section id="header">
        <h1>Les Potes en Ciel</h1>
        <p>Renforcer la présence en ligne et l&apos;engagement communautaire pour le bien-être des enfants et des familles</p>
        <nav>
          <Button variant="primary" href="#intro">Accueil</Button>
          <Button variant="primary" href="#features">Fonctionnalités</Button>
          <Button variant="primary" href="#about">À propos</Button>
        </nav>
        <Button variant="primary" href="#TODO">Accéder à l&apos;application web Les Potes En Ciel</Button>
      </section>

      <section id="features">
        <h2>Fonctionnalités Clés:</h2>
          <h3>Bibliothèque</h3>
          <p>Accédez à une collection de livres disponibles dans la bibliothèque de l'association, avec la possibilité d'emprunter ou d'annuler des réservations en ligne.</p>
          <img src="https://via.placeholder.com/300x200" alt="Authentification" />
          <h3>Authentification</h3>
          <p>Connectez-vous avec notre système d'authentification, permettant l'inscription de nouveaux utilisateurs et la gestion des comptes existants.</p>
          <img src="https://via.placeholder.com/300x200" alt="Newsletter" />
          <h3>Inscription à la newsletter</h3>
          <p>Restez informé des dernières actualités et événements de l'association en vous inscrivant à notre newsletter.</p>
          <img src="https://via.placeholder.com/300x200" alt="Bibliothèque" />
      </section>

      <section id="about">
        <h2>À propos</h2>
        <p>
          En tant que maman bénévole depuis trois ans chez Les Potes en Ciel, j&apos;ai constaté le besoin de moderniser les outils de communication de l&apos;association. Ce projet a été inspiré par ce besoin afin d&apos;améliorer l&apos;engagement des membres et de faciliter l&apos;interaction avec la communauté. Il s&apos;agit également d&apos;un projet de portfolio pour l&apos;école Holberton, visant à démontrer mes compétences en développement web et en gestion de projet.
        </p>
        <div className="team-links">
          <Button variant="primary" href="https://www.holbertonschool.fr/">Holberton</Button>
          <Button variant="primary" href="https://github.com/amandinekemp?tab=repositories">GitHub</Button>
          <Button variant="primary" href="https://www.linkedin.com/in/amandinekemp/">Linkedin</Button>
        </div>
        <Button variant="primary" href="https://github.com/amandinekemp/Les_Potes_En_Ciel">Dépôt GitHub</Button>
      </section>

    </div>
  );
}

export default App;
