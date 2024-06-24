import React from 'react';
import { Button, Card, Container, Row, Col, CardBody, Ratio, CardTitle, CardText } from 'react-bootstrap';
import Image from 'next/image';

const HelpUsCmpt = () => {
  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h2 className="text-center">Nous aider</h2>
          <p className="text-center">Les Potes, c&apos;est avant tout une association d&apos;intérêt général. Pour continuer nos actions, on a besoin de vous.</p>
        </Col>
      </Row>

      <Row className="mt-4 mb-4">
        <Col>
          <h2>Association Les Potes en ciel - Campagne de don</h2>
          <Ratio aspectRatio="16x9">
          <iframe width="607" height="480" src="https://www.youtube.com/embed/KMPn39kSuP4"
          title="Association Les Potes en ciel - Campagne de don"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>
          </Ratio>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col className="d-flex justify-content-center">
          <div className="title-circle-wrapper">
            <h3 className="title-circle">Don déductible des impôts à 66%</h3>
            <div className="rounded-circle overflow-hidden mx-auto" style={{ width: '200px', height: '200px' }}>
              <Image src="/help_us/faire_un_don.jpg" alt="Volunteer Photo" width={200} height={200} className="img-fluid" />
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Card className="mb-4">
          <CardBody>
            <CardTitle>Faire un don / devenir mécène</CardTitle>
            <CardText>
              <ul>
                <li>Tu es convaincu par le projet ?</li>
                <li>Tu aimes venir au café des enfants pour jouer avec ton enfant? Boire un café au bar et discuter avec d&apos;autres parents? Participer à un atelier et avoir des idées d&apos;activités à refaire à la maison?</li>
                <li>Tu aimes aussi jouer dehors avec la Pote mobile? Et participer à des moments festifs et citoyens lors des rues aux enfants?</li>
              </ul>
              Tou.te.s ensemble, joignons nos forces pour que l’association continue à offrir un accueil et des ateliers de qualité, accessibles à tous.
              <br /><br />
              L&apos;association est reconnue d&apos;intérêt général et les dons reçus pourront faire l&apos;objet d&apos;une réduction d&apos;impôts de 66%.
              <br /><br />
              Pour nous aider à concrétiser ce magnifique projet à destination des enfants, tu peux contribuer à la campagne de don en ligne sur notre espace Hello Asso.
              <br /><br />
              N’hésite pas à parler du projet de l’association autour de toi et à mobiliser tes proches autour de ce projet qui te tient à cœur.
            </CardText>
            <Button variant="success" href="https://www.helloasso.com/associations/association-les-potes-en-ciel/formulaires/1" target="_blank">Campagne de don Hello Asso</Button>
          </CardBody>
        </Card>
      </Row>

      <Row className="mb-4">
        <Col className="d-flex justify-content-center">
          <div className="title-circle-wrapper">
            <h3 className="title-circle">L’association appartient à ses membres.
            <br /><br />
            Ce sont eux qui la font vivre au quotidien.</h3>
            <div className="rounded-circle overflow-hidden mx-auto" style={{ width: '200px', height: '200px' }}>
              <Image src="/help_us/devenir_benevole.jpg" alt="Volunteer Photo" width={200} height={200} className="img-fluid" />
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Card className="mb-4">
          <CardBody>
            <CardTitle>Devenir bénévole</CardTitle>
            <CardText>
              Tu as des envies, des idées ou des projets en tête,
              <br />….l’envie de t’impliquer sur des actions déjà portées par les Potes,
              <br />… le souhait de prolonger les horaires d’ouverture du café des enfants sur du temps bénévoles
              <br /><br />
              Fais-nous signe, l’équipe salariée et bénévole est toujours à ton écoute.
              <br /><br />
              Et n&apos;hésite pas consulter le dernier appel à coups de main en cliquant sur le bouton ci-dessous
            </CardText>
            <Button variant="primary" href="/help_us/Nouvel-Apel-a-coup-de-mains-juin-24.pdf">Appel à coup de main</Button>
          </CardBody>
        </Card>
      </Row>
    </Container>
  );
};

export default HelpUsCmpt;
