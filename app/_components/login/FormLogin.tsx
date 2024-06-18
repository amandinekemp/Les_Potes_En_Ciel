import { Button, Form, InputGroup } from "react-bootstrap";

const FormLogin = () => {
  return (
    <>
    <div className="card shadow rounded mb-4">
      <div className="card-body">
        <h3 className="card-title text-center">Se connecter</h3>
        <Form>
          <div className="mb-3">
            <Form.Label htmlFor="email">E-mail*</Form.Label>
            <Form.Control type="email" id="email" required></Form.Control>
          </div>
          <div className="mb-3">
            <Form.Label htmlFor="password" >Mot de passe*</Form.Label>
            <InputGroup>
              <Form.Control type="password" id="password" required></Form.Control>
              <Button type="button" variant="outline-secondary" id="togglePassword">
                <i className="bi bi-eye"></i>
              </Button>
            </InputGroup>
          </div>
          <div className="d-grid gap-2">
            <Button type="submit" variant="info" className="text-white">Se connecter</Button>
          </div>
        </Form>
      </div>
    </div>
    </>
  );
}

export default FormLogin;