"use client"

import React, { useState } from 'react';
import { Form, Button, Col, Nav } from 'react-bootstrap';

const NewsletterForm = () => {
  const [formType, setFormType] = useState('subscribe'); // 'subscribe' or 'unsubscribe'
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formType === 'subscribe') {
      // Logic for subscribing
      const message = `New subscription request:\nEmail: ${email}`;
      alert(message); // Replace with actual sending logic
    } else {
      // Logic for unsubscribing
      const message = `Unsubscription request:\nEmail: ${email}`;
      alert(message); // Replace with actual sending logic
    }
    setEmail(''); // Clear form fields after submission
  };

  return (
    <Col xs={12} md={8}>
      <h2 className="text-center mb-4">Newsletter - Les Potes en Ciel</h2>
      <Nav variant="tabs" defaultActiveKey="subscribe">
        <Nav.Item>
          <Nav.Link eventKey="subscribe" onClick={() => setFormType('subscribe')}>S'inscrire</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="unsubscribe" onClick={() => setFormType('unsubscribe')}>Se désinscrire</Nav.Link>
        </Nav.Item>
      </Nav>
      <Form onSubmit={handleSubmit} className="mt-4">
        <Form.Group controlId="formEmail">
          <Form.Label>Adresse email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Entrez votre e-mail"
            value={email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        {formType === 'subscribe' && (
          <Button variant="primary" type="submit" className="mt-3">
            Je m’inscris gratuitement
          </Button>
        )}
        {formType === 'unsubscribe' && (
          <Button variant="primary" type="submit" className="mt-3">
            Je me désinscris
          </Button>
        )}
      </Form>
    </Col>
  );
};

export default NewsletterForm;
