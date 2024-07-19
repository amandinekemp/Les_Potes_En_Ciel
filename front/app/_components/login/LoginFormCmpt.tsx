"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Form, InputGroup } from "react-bootstrap";

/** LoginFormCmpt handles user login with form submission and password visibility toggle **/

const LoginFormCmpt = () => {
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [user, setUser] = useState({});
  const router = useRouter();

  const handleLogin = (e:any) => {
    e.preventDefault();
    fetch("http://localhost:8000/api/login_check", {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify(user),
      credentials: 'include'
    })
    .then((response) => {
      if (response.ok) {
        router.push("/account");
      }
    })
    .catch((error) => console.error(error));
  };

  return (
    <>
    <div className="card shadow rounded mb-4">
      <div className="card-body">
        <h3 className="card-title text-center">Se connecter</h3>
        <Form onSubmit={handleLogin} action={"/account"}>
          <div className="mb-3">
            <Form.Label htmlFor="email">E-mail*</Form.Label>
            <Form.Control type="email" id="email"
              onChange={(e) => setUser({...user, username: e.target.value})}
              required></Form.Control>
          </div>
          <div className="mb-3">
            <Form.Label htmlFor="password" >Mot de passe*</Form.Label>
            <InputGroup>
              <Form.Control type={hiddenPassword ? "password" : "text"} id="password"
                onChange={(e) => setUser({...user, password: e.target.value})}
                required></Form.Control>
              <Button type="button" variant="outline-secondary" onClick={() => setHiddenPassword((prev) => !prev)}>
                <i className={"bi bi-eye" + (hiddenPassword ? "-slash" : "")}></i>
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
};

export default LoginFormCmpt;
