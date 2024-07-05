"use client"

import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const FormForgotPasswordCmpt = () => {
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Make a server request to validate the email and send reset email
  //   // This is a placeholder, replace with actual server call
  //   fetch('/api/password-reset-request', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ email }),
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     if (data.success) {
  //       setMessage('Un e-mail de réinitialisation a été envoyé à votre adresse e-mail.');
  //     } else {
  //       setMessage('Erreur: Adresse e-mail introuvable.');
  //     }
  //   });
  // };

  return (
    <>
      <h1>Lost Password</h1>
      {/* <div className="row justify-content-center">
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Réinitialiser le mot de passe</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Adresse e-mail</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                  />
                </div>
                <button type="submit" className="btn btn-primary">Envoyer</button>*/}
                <Button variant="secondary" href='/login'>Annuler</Button>
              {/*</form>
              {message && <p className="mt-3">{message}</p>}
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default FormForgotPasswordCmpt;
