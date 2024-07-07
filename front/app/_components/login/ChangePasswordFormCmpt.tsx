import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
// import { useParams } from 'react-router-dom';

const ChangePasswordFormCmpt = () => {
  // const { token } = useParams();
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  // const [message, setMessage] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (password !== confirmPassword) {
  //     setMessage('Les mots de passe ne correspondent pas.');
  //     return;
  //   }
  //   // Make a server request to reset the password
  //   // This is a placeholder, replace with actual server call
  //   fetch('/api/password-reset', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ token, password }),
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     if (data.success) {
  //       setMessage('Votre mot de passe a été réinitialisé avec succès.');
  //     } else {
  //       setMessage('Erreur: Le lien de réinitialisation est invalide ou a expiré.');
  //     }
  //   });
  // };

  return (
    <>
      <h1>Change Password</h1>
      {/* <div className="row justify-content-center">
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Réinitialiser le mot de passe</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="password">Nouveau mot de passe</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="confirmPassword" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    required 
                  />
                </div>*/}
                <Button variant="secondary" href='/'>Annuler</Button>
              {/*
                <button type="submit" className="btn btn-primary">Réinitialiser le mot de passe</button>
              </form>
              {message && <p className="mt-3">{message}</p>}
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ChangePasswordFormCmpt;
