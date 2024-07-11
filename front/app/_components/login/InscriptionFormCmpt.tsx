"use client";

import { useState } from 'react';
import { Button, Form, InputGroup } from "react-bootstrap";

const InscriptionFormCmpt = () => {
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [account, setAccount] = useState({});
  const [message, setMessage] = useState("");

  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  function scrollToTop() {
      if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const handleSubmit = (e:any) => {
    // Empêche le rechargement de la page lors de la soumission du formulaire
    e.preventDefault();
    // Appelle la fonction onSubmit avec le nouvel objet livre
    fetch('http://localhost:8000/api/register/account', {
      method: 'POST',
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify(account)
    })
    .then(response => {
      if(response.ok) {
        console.log('Registration ok!');
        scrollToTop();
        setMessage('Votre compte a bien été créé, vous pouvez vous connecter.');
      } else {
        console.error('Registration status not ok:', response);
      }
    })
    .catch(error => {
      // Si la requête a échoué, affiche un message d'erreur
      console.error('Erreur:', error);
    });
  };

  return (
    <>
    <div className="card shadow rounded">
      <div className="card-body">
        {message && <p className="mt-3">{message}</p>}
        <h3 className="card-title text-center">Créer un compte</h3>
        <Form onSubmit={handleSubmit}>
          <div className="mb-3">
            <Form.Label htmlFor="prenom">Prénom*</Form.Label>
            <Form.Control type="text" id="prenom" required></Form.Control>
          </div>
          <div className="mb-3">
            <Form.Label htmlFor="nom">Nom*</Form.Label>
            <Form.Control type="text" id="nom"
              onChange={(e) => setAccount({...account, name: e.target.value})}
              required></Form.Control>
          </div>
          <div className="mb-3">
            <Form.Label htmlFor="adresse">Adresse*</Form.Label>
            <Form.Control type="text" id="adresse"
            onChange={(e) => setAccount({...account, address: e.target.value})}
            required></Form.Control>
          </div>
          <div className="mb-3">
            <Form.Label htmlFor="codePostal">Code postal*</Form.Label>
            <Form.Control type="text" id="codePostal"
            onChange={(e) => setAccount({...account, zipCode: e.target.value})}
            required></Form.Control>
          </div>
          <div className="mb-3">
            <Form.Label htmlFor="nameCity">Ville*</Form.Label>
            <Form.Control type="text" id="nameCity"
            onChange={(e) => setAccount({...account, city: e.target.value})}
            required></Form.Control>
          </div>
          <div className="mb-3">
            <Form.Label htmlFor="emailSignup">E-mail*</Form.Label>
            <Form.Control type="email" id="emailSignup"
            onChange={(e) => setAccount({...account, email: e.target.value})}
            required></Form.Control>
          </div>
          <div className="mb-3">
            <Form.Label htmlFor="passwordSignup">Mot de passe*</Form.Label>
            <InputGroup>
              <Form.Control type={hiddenPassword ? "password" : "text"} id="passwordSignup"
              onChange={(e) => setAccount({...account, password: e.target.value})}
              required></Form.Control>
              <Button type="button" variant="outline-secondary" onClick={() => setHiddenPassword((prev) => !prev)}>
                <i className={"bi bi-eye" + (hiddenPassword ? "-slash" : "")}></i>
              </Button>
            </InputGroup>
          </div>
          <div className="mb-3">
            <Form.Label htmlFor="phoneSignup">Téléphone*</Form.Label>
            <Form.Control type="phone" id="phoneSignup"
            onChange={(e) => setAccount({...account, phoneNumber: e.target.value})}
            required></Form.Control>
          </div>
          <div className="form-check mb-3">
            <Form.Check type="checkbox" id="newsletter"></Form.Check>
            <Form.Label htmlFor="newsletter">
              Incrivez-vous à la newsletter de l&apos;association.
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

export default InscriptionFormCmpt;