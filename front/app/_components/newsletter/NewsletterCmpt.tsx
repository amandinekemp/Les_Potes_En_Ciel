"use client"

import React, { useState } from 'react';
import { Form, Button, Col, Nav } from 'react-bootstrap';

/** NewsletterForm handles subscription and unsubscription from the newsletter **/

const NewsletterForm = () => {
  const [formType, setFormType] = useState('subscribe'); // 'subscribe' or 'unsubscribe'
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = (e:any) => {
    e.preventDefault();
    formType === 'subscribe' ? doSubscribe() : doUnsubscribe();
  };

  const doSubscribe = () => {
    fetch('http://localhost:8000/api/register/newsletters', {
      method: 'POST',
      body: JSON.stringify({email: email})
    })
    .then(response => {
      setMessage("Souscription réussie, merci");
      setEmail('');
    })
    .catch(error => {
      // If the query fails, displays an error message
      setMessage("Une erreur s'est produite. Veuillez réessayer plus tard.");
      console.error('Erreur:', error);
    });
  };

  const doUnsubscribe = () => {
    fetch('http://localhost:8000/api/register/newsletters/'+email, {
      method: 'DELETE',
    })
    .then(response => {
      setMessage("Suppression prise en compte, nous sommes désolés que cela ne vous interesse plus.");
      setEmail('');
    })
    .catch(error => {
      // If the query fails, displays an error message
      setMessage("Une erreur s'est produite. Veuillez réessayer plus tard.");
      console.error('Erreur:', error);
    });
  };

  return (
    <Col xs={12} md={8}>
      <h2 className="text-center mb-4">Newsletter - Les Potes en Ciel</h2>
      <Nav variant="tabs" defaultActiveKey="subscribe">
        <Nav.Item>
          <Nav.Link eventKey="subscribe" onClick={() => {setFormType('subscribe'); setMessage('');}}>S&apos;inscrire</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="unsubscribe" onClick={() => {setFormType('unsubscribe'); setMessage('');}}>Se désinscrire</Nav.Link>
        </Nav.Item>
      </Nav>
      <Form onSubmit={handleSubmit} className="mt-4">
        <Form.Group controlId="formEmail">
          <Form.Label>Adresse email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Entrez votre e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
      
        <Button variant="primary" type="submit" className="mt-3">
          {formType === 'subscribe' ? "Je m’inscris gratuitement" : "Je me désinscris"}
        </Button>
      </Form>
      {message && <p className="mt-3">{message}</p>}
    </Col>
  );
};

export default NewsletterForm;
