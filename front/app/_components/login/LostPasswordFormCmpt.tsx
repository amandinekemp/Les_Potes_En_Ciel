"use client"

import React, { useState } from 'react';
import { Button, Card, CardBody, Form } from 'react-bootstrap';

const FormForgotPasswordCmpt = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: any) => {
     e.preventDefault();
  //   fetch('/api/password-reset-request', {
  //     method: 'POST',
  //     headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
  //     body: JSON.stringify({ email }),
  //   })
  //   .then(response => {
         setMessage('Si ce mail existe, un e-mail pour réinitialiser votre mot de passe vous a été envoyé.');
  //   });
  };

  return (
    <>
      <Card>
        <CardBody>
          <Card.Title>Réinitialiser le mot de passe</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="email">Adresse e-mail</Form.Label>
              <Form.Control type="email" id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </Form.Group>
            <div className="mt-4 d-flex justify-content-between">
              <Button variant="secondary" href='/login'>Annuler</Button>
              <Button variant="primary" type="submit">Envoyer</Button>
            </div>
          </Form>
          {message && <p className="mt-3">{message}</p>}
        </CardBody>
      </Card>
    </>
  );
};

export default FormForgotPasswordCmpt;
