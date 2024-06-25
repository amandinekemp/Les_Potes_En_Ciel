import { Button, Form, InputGroup } from "react-bootstrap";

const InscriptionForm = () => {
  return (
    <>
    <div className="card shadow rounded">
      <div className="card-body">
        <h3 className="card-title text-center">Créer un compte</h3>
        <Form>
          <div className="mb-3">
            <Form.Label htmlFor="prenom">Prénom*</Form.Label>
            <Form.Control type="text" id="prenom" required></Form.Control>
          </div>
          <div className="mb-3">
            <Form.Label htmlFor="nom">Nom*</Form.Label>
            <Form.Control type="text" id="nom" required></Form.Control>
          </div>
          <div className="mb-3">
            <Form.Label htmlFor="dob">Date de naissance*</Form.Label>
            <Form.Control type="date" id="dob" required></Form.Control>
          </div>
          <div className="mb-3">
            <Form.Label htmlFor="adresse">Adresse*</Form.Label>
            <Form.Control type="text" id="adresse" required></Form.Control>
          </div>
          <div className="mb-3">
            <Form.Label htmlFor="codePostalVille">Code postal - Ville*</Form.Label>
            <Form.Control type="text" id="codePostalVille" required></Form.Control>
          </div>
          <div className="mb-3">
            <Form.Label htmlFor="emailSignup">E-mail*</Form.Label>
            <Form.Control type="email" id="emailSignup" required></Form.Control>
          </div>
          <div className="mb-3">
            <Form.Label htmlFor="passwordSignup">Mot de passe*</Form.Label>
            <InputGroup>
              <Form.Control type="password" id="passwordSignup" required></Form.Control>
              <Button variant="outline-secondary" type="button" id="togglePasswordSignup">
                <i className="bi bi-eye"></i>
              </Button>
            </InputGroup>
          </div>
          <div className="form-check mb-3">
            <Form.Check type="checkbox" id="newsletter"></Form.Check>
            <Form.Label htmlFor="newsletter">
              Incrivez-vous à la newsletter de l&apos;association.
            </Form.Label>
          </div>
          <div className="form-check mb-3">
            <Form.Check type="checkbox" id="infoEmail" required></Form.Check>
            <Form.Label htmlFor="infoEmail">
              J&apos;autorise le café des enfants à m&apos;envoyer des informations par e-mail.*
            </Form.Label>
          </div>
          <div className="d-grid">
            <Button type="submit" variant="primary" className="text-white">Enregistrer</Button>
          </div>
        </Form>
      </div>
    </div>
    </>
  );
}

export default InscriptionForm;