"use client";

import { useState } from 'react';
import { useRouter } from "next/navigation";
import { Button, Form, InputGroup } from "react-bootstrap";

const LoginFormCmpt = () => {
  const [hidden, setHidden] = useState(true);
  const router = useRouter();

  const handleLogin = (e: any) => {
    router.replace('/account');
  };

  return (
    <>
    <div className="card shadow rounded mb-4">
      <div className="card-body">
        <h3 className="card-title text-center">Se connecter</h3>
        <Form onSubmit={handleLogin} action={"/account"}>
          <div className="mb-3">
            <Form.Label htmlFor="email">E-mail*</Form.Label>
            <Form.Control type="email" id="email" required></Form.Control>
          </div>
          <div className="mb-3">
            <Form.Label htmlFor="password" >Mot de passe*</Form.Label>
            <InputGroup>
              <Form.Control type={hidden ? "password" : "text"} id="password" required></Form.Control>
              <Button type="button" variant="outline-secondary" onClick={() => setHidden((prev) => !prev)}>
                <i className={"bi bi-eye" + (hidden ? "-slash" : "")}></i>
              </Button>
            </InputGroup>
          </div>
          <div className="mb-3 text-end">
            <a href="/lost_password" className="text-decoration-none">Mot de passe oublié ?</a>
          </div>
          <div className="d-grid gap-2">
            <Button type="submit" variant="primary" className="text-white">Se connecter</Button>
          </div>
        </Form>
      </div>
    </div>
    </>
  );
}

export default LoginFormCmpt;