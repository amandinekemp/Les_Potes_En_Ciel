"use client"

import React, { useState } from 'react';
import { Button, Form, Image, InputGroup } from 'react-bootstrap';

// Composant BookCreateForm qui permet d'ajouter un nouveau livre à la bibliothèque
const BookCreateForm = (props: { onShelve: any; }) => {
  // États pour gérer les champs du formulaire
  const [title, setTitle] = useState('');       // État pour le titre du livre
  const [author, setAuthor] = useState('');     // État pour l'auteur du livre
  const [summary, setSummary] = useState('');   // État pour le résumé du livre
  const [cover, setCover] = useState(null);     // État pour la couverture du livre (fichier)

  // Fonction pour gérer la sélection du fichier de couverture
  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCover(reader.result); // Met à jour l'état avec l'URL du fichier
      };
      reader.readAsDataURL(file); // Lire le fichier en tant qu'URL de données
    }
  };

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();  // Empêche le rechargement de la page lors de la soumission du formulaire
    const newBook = { title, author, summary, cover };  // Crée un nouvel objet livre avec les données du formulaire
    // onSubmit(newBook);  // Appelle la fonction onSubmit avec le nouvel objet livre
    // Réinitialise les champs du formulaire après la soumission
    setTitle('');
    setAuthor('');
    setSummary('');
    setCover(null);
  };

  return (
    <>
    <Form className="mt-4" onSubmit={handleSubmit}>
      {/* <h3>Ajouter un nouveau livre</h3> */}
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
      {/* Champ pour la couverture du livre */}
      <Form.Group>
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
      </Form.Group>
      {/* Bouton de soumission du formulaire */}
      <Button type="submit" variant="success">Ajouter</Button>
      <Button variant="secondary" onClick={props.onShelve}>Annuler</Button>
    </Form>
    </>
  );
};

export default BookCreateForm;
