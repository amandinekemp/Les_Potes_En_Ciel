import React from 'react';
import { Row, Col, Button, Ratio } from 'react-bootstrap';
import Image from 'next/image';

/** The `AboutUsCmpt` component showcases the "Les Potes en Ciel" association. It highlights their mission, values, and goals. The component includes a video, activity reports, and a call-to-action to join. **/

const AboutUsCmpt = () => {
  return (
    <>
      <Row>
        <Col>
          <h1>Qui sommes-nous</h1>
          <p className="lead">Une association engagée pour les enfants</p>
          <p>
            Les Potes en Ciel, installée depuis 2006 dans le quartier de Lille Fives, gère un café des enfants, un lieu centré sur l’accueil de l’enfant et de son entourage défendant le principe d&apos;un accueil inconditionnel. Nous accueillons les enfants accompagnés de leurs proches afin de leur proposer une alternative aux lieux traditionnels. Notre espace offert est un lieu de liberté, de loisirs et de solidarité où nous organisons différentes animations pour répondre aux attentes et besoins des enfants et de leurs parents.
          </p>
          <blockquote className="blockquote">
            <p>
              « Tout être humain détient les moyens de se construire une compréhension du monde à condition qu’il puisse entrer en relation avec ses semblables dans un rapport de coopération »
            </p>
            <footer className="blockquote-footer">Charte de l’Éducation Populaire</footer>
          </blockquote>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6}>
          <h3>CAPACITES D&apos;AGIR</h3>
          <p>Notre association défend la conviction que chacun possède les capacités à agir sur sa vie et sur le monde pour les transformer.</p>
        </Col>
        <Col md={6}>
          <h3>LIEN SOCIAL</h3>
          <p>
            Nous avons la volonté de tisser un lien social autour de l’enfant, de son environnement et entourage proche, et nous donnons pour vocation de proposer des outils (café des enfants, manifestations « hors les murs »…) permettant de créer des instants pour que petits et grands se réunissent.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6}>
          <h3>EPANOUISSEMENT DES ENFANTS</h3>
          <p>
            Nous souhaitons contribuer au développement de l’épanouissement des potentiels de chacun et en particulier de l’enfant afin que ce dernier devienne un citoyen capable de discernement et de choix.
          </p>
        </Col>
        <Col md={6}>
          <h3>RESPECT, BIENVEILLANCE ET CONVIVIALITE</h3>
          <p>
            Le respect de l’individu, la bienveillance, la convivialité sont nos maîtres mots afin de permettre la reconnaissance de chacun dans son histoire et de favoriser l’entraide, la mixité sociale et culturelle, la tolérance, la citoyenneté donc le bien vivre ensemble.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h2>Les objectifs de l&apos;association</h2>
          <ul>
            <li>Favoriser l&apos;épanouissement de l&apos;enfant</li>
            <li>Faciliter la relation parents-enfants</li>
            <li>Créer du lien social pour rompre l&apos;isolement des familles</li>
            <li>Favoriser la mixité sociale, culturelle et intergénérationnelle</li>
            <li>Transmettre des valeurs de solidarité, de respect de l&apos;environnement et d&apos;ouverture sur le monde</li>
            <li>Favoriser la participation des enfants et des parents pour les rendre acteurs</li>
          </ul>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h2>Vidéo de présentation</h2>
          <Ratio aspectRatio="16x9">
            <iframe width="560" height="315"
              src="https://www.youtube.com/embed/_DKlq52hlyI"
              title="Presentation de l&#39;association Les potes en ciel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              ></iframe>
          </Ratio>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h2>Découvrez en détail nos actions</h2>
          <p>
            Pour en savoir plus sur les activités de l&apos;association, son fonctionnement, ses partenaires, vous pouvez télécharger ci-dessous le dernier rapport d&apos;activités.
          </p>
          <Button href="/path/to/rapport2022.pdf" className="m-2" variant="primary">Rapport d&apos;activité 2022</Button>
          <Button href="/path/to/rapport2023.pdf" className="m-2" variant="primary">Rapport d&apos;activités 2023</Button>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h2>Une équipe</h2>
          <p>
            Les Potes en ciel, ce sont avant tout des personnes qui s&apos;engagent et qui travaillent au quotidien pour faire vivre le projet. C&apos;est plus de 850 membres, enfants et adultes, qui fréquentent nos espaces, 43 bénévoles actifs, 10 administratrice.eur.s bénévoles et 8 salarié.e.s.
          </p>
          <Image src={"/about_us/une_equipe.jpg"} alt="Une équipe" width={350} height={500} className="mx-auto"></Image>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col className="text-center">
          <h2>Rejoignez-nous dès maintenant</h2>
          <p>Ensemble, faisons briller les yeux des enfants. Vous souhaitez soutenir notre association ou participer à nos activités ? Rejoignez-nous dès maintenant et ensemble, créons un monde meilleur pour les enfants.</p>
          <Button href="#join-us" variant="success">Devenir membre</Button>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={4}>
          <Image src="/about_us/about_us_footer1.jpg" alt="about_us_footer1" width={250} height={300}/>
        </Col>
        <Col md={4}>
          <Image src="/about_us/about_us_footer2.jpg" alt="about_us_footer2" width={250} height={300}/>
        </Col>
        <Col md={4}>
          <Image src="/about_us/about_us_footer3.jpg" alt="about_us_footer3" width={250} height={300}/>
        </Col>
      </Row>
    </>
  );
};

export default AboutUsCmpt;
