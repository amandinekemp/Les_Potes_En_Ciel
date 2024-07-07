"use client"

import { generateKey } from 'crypto';
import React, { useState } from 'react';
import { Button, Form, Image, InputGroup } from 'react-bootstrap';

// Composant BookCreateForm qui permet d'ajouter un nouveau livre à la bibliothèque
const BookCreateFormCmpt = (props: { onShelve: any; }) => {
  // États pour gérer les champs du formulaire
  const [message, setMessage] = useState('');
  const [isbn, setIsbn] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [summary, setSummary] = useState('');
  const [genres, setGenres] = useState('');
  //const [cover, setCover] = useState(null);

  // Fonction pour gérer la sélection du fichier de couverture
  // const handleCoverChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setCover(reader.result); // Met à jour l'état avec l'URL du fichier
  //     };
  //     reader.readAsDataURL(file); // Lire le fichier en tant qu'URL de données
  //   }
  // };

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = (e:any) => {
    // Empêche le rechargement de la page lors de la soumission du formulaire
    e.preventDefault();
    // Appelle la fonction onSubmit avec le nouvel objet livre
    fetch('http://localhost:8000/api/books', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        isbn: isbn, 
        title: title, 
        author: author, 
        summary: summary, 
        genres: genres
      })
    })
    .then(response => {
      if(response.ok) { 
        setMessage("Le livre a été ajouté avec succès !");
        // Réinitialise les champs du formulaire après la soumission
        setIsbn('');
        setTitle('');
        setAuthor('');
        setSummary('');
        setGenres('');
        //setCover(null);
      } else {
        response.json().then((data:any) => {
          setMessage(data.detail);
          // TODO afficher les erreurs sur plusieurs lignes
        });
      }
    })
    .catch(error => {
      // Si la requête a échoué, affiche un message d'erreur
      setMessage("Une erreur s'est produite lors de l'ajout du livre. Veuillez réessayer.");
      console.error('Erreur:', error);
    });
  };

  return (
    <>
    <Form onSubmit={handleSubmit}>
      <h3>Ajouter un nouveau livre</h3>
      {/* Champ pour l'ISBN du livre */}
      <Form.Group>
        <Form.Label>ISBN</Form.Label>
        <InputGroup>
          <Form.Control type="text"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            required
          ></Form.Control>
        </InputGroup>
      </Form.Group>
      {/* Champ pour le titre du livre */}
      <Form.Group>
        <Form.Label>Titre</Form.Label>
        <InputGroup>
          <Form.Control type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          ></Form.Control>
        </InputGroup>
      </Form.Group>
      {/* Champ pour l'auteur du livre */}
      <Form.Group>
        <Form.Label>Auteur</Form.Label>
        <InputGroup>
          <Form.Control type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          ></Form.Control>
        </InputGroup>
      </Form.Group>
      {/* Champ pour le résumé du livre */}
      <Form.Group>
        <Form.Label>Résumé</Form.Label>
        <Form.Control as="textarea"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          required
        ></Form.Control>
      </Form.Group>
      {/* Champ pour le genre du livre */}
      <Form.Group>
        <Form.Label>Genre(s)</Form.Label>
        <InputGroup>
          <Form.Control type="text"
            value={genres}
            onChange={(e) => setGenres(e.target.value)}
            required
          ></Form.Control>
        </InputGroup>
      </Form.Group>
      {/* Champ pour la couverture du livre */}
      {/* <Form.Group>
        <Form.Label>Couverture</Form.Label>
        <InputGroup>
          <Form.Control type="file"
            onChange={handleCoverChange}
            accept="image/*"
            required
          ></Form.Control>
        </InputGroup>
        {cover && (
          <Image src={cover} alt="Book cover preview" className="mt-2" style={{ width: '100px', height: '150px' }} />
        )}
      </Form.Group> */}
      {/* Bouton de soumission du formulaire */}
      <div className="mt-4 d-flex justify-content-between">
        <Button variant="secondary" onClick={props.onShelve}>Annuler</Button>
        <Button type="submit" variant="primary">Ajouter</Button>
      </div>
      {message && <p className="mt-3">{message}</p>}
      </Form>
    </>
  );
};

export default BookCreateFormCmpt;
