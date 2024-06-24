"use client"

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const ContactUsCmpt = () => {
  const [formData, setFormData] = useState({
    name: '',
    firstName: '',
    message: '',
    email: '',
    consent: false
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateForm(formData);
    if (formErrors.length > 0) {
      setErrors(formErrors);
    } else {
      // Handle form submission logic (e.g., send data to server)
      setFormSubmitted(true);
    }
  };

  const validateForm = (data) => {
    const errors = [];
    if (!data.firstName) errors.push('Prénom est obligatoire');
    if (!data.name) errors.push('Nom est obligatoire');
    if (!data.message) errors.push('Message est obligatoire');
    if (!data.consent) errors.push('Consentement est obligatoire');
    return errors;
  };

  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h2 className="text-center">Contactez nous</h2>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          {formSubmitted ? (
            <Alert variant="success">
              Merci pour votre message. Nous vous répondrons dès que possible.
            </Alert>
          ) : (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formFirstName">
                <Form.Label>Prénom*</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Votre prénom"
                />
              </Form.Group>
              <Form.Group controlId="formName">
                <Form.Label>Nom*</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message*</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Votre message"
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>E-Mail (si vous souhaitez une réponse)</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Votre email"
                />
              </Form.Group>
              <Form.Group controlId="formConsent">
                <Form.Check
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  label="Je consens par la présente à ce que ces données soient stockées et traitées dans le but d'établir un contact. Je sais que je peux révoquer mon consentement à tout moment*"
                />
              </Form.Group>
              {errors.length > 0 && (
                <Alert variant="danger">
                  {errors.map((error, index) => (
                    <div key={index}>{error}</div>
                  ))}
                </Alert>
              )}
              <Button variant="primary" type="submit">
                Envoyer
              </Button>
            </Form>
          )}
        </Col>
        <Col md={6}>
          <h5>Contact Information</h5>
          <p><strong>Téléphone:</strong> 09 50 06 78 80</p>
          <p><strong>Courriel:</strong> cafedesenfants.pec@gmail.com</p>
          <p><strong>Adresse:</strong> 70 Rue de Flers, 59800 Lille</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.4568534399975!2d3.0620952157418333!3d50.63637678207214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d598007d554f%3A0x2b0c9b9e6e19b620!2s70%20Rue%20de%20Flers%2C%2059800%20Lille%2C%20France!5e0!3m2!1sen!2sus!4v1625238590927!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUsCmpt;
