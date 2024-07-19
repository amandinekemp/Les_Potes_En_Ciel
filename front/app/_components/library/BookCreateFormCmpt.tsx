"use client"

import React, { useEffect, useState } from 'react';
import { generateKey } from 'crypto';
import { Button, Form, Image, InputGroup } from 'react-bootstrap';

import { Book } from '@/app/_types/Book';

/** BookCreateForm component for adding a new book to the library **/
const BookCreateFormCmpt = (props: { onShelve: any; isbnBookToEdit: string;}) => {

  // Reports to manage form fields
  const [message, setMessage] = useState('');
  const [creation, setCreation] = useState(true);
  const [book, setBook] = useState<Book>({});
  //const [cover, setCover] = useState(null);

  // When the page loads
  useEffect(() => {
    // fill with existing book if set
    console.log("ISBN to edit: "+props.isbnBookToEdit)
    if (props.isbnBookToEdit) {
      setCreation(false);
      fetch('http://localhost:8000/api/books/'+props.isbnBookToEdit, {
        method: 'GET',
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}
      })
      .then(response => response.json())
      .then(data => {
        setBook(data);
      });
    }
  }, []);

  // Function to manage cover file selection
  // const handleCoverChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setCover(reader.result); // Updates status with file URL
  //     };
  //     reader.readAsDataURL(file); // Read file as data URL
  //   }
  // };

  // Form submission management function
  const handleSubmit = (e:any) => {
    // Prevents page reload on form submission
    e.preventDefault();
    // Calls the onSubmit function with the new book object
    fetch('http://localhost:8000/api/books' + (creation ? '' : '/'+book.isbn), {
      method: creation ? 'POST' : 'PUT',
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify(book)
    })
    .then(response => {
      if(response.ok) { 
        setMessage("Le livre a été " + (creation ? "ajouté" : "modifié") + " avec succès !");
        setCreation(false);
      } else {
        response.json().then((data:any) => {
          setMessage(data.detail);
          // TODO display errors on multiple lines
        });
      }
    })
    .catch(error => {
      // If the query fails, displays an error message
      setMessage("Une erreur s'est produite lors de l'ajout du livre. Veuillez réessayer.");
      console.error('Erreur:', error);
    });
  };

  return (
    <>
    <Form onSubmit={handleSubmit}>
      <h3>Ajouter un nouveau livre</h3>
      {/* Field for book ISBN */}
      <Form.Group>
        <Form.Label>ISBN</Form.Label>
        <InputGroup>
          <Form.Control type="text"
            value={book.isbn}
            onChange={(e) => setBook({...book, isbn: e.target.value})}
            disabled={!creation}
            required
          ></Form.Control>
        </InputGroup>
      </Form.Group>
      {/* Book title field */}
      <Form.Group>
        <Form.Label>Titre</Form.Label>
        <InputGroup>
          <Form.Control type="text"
            value={book.title}
            onChange={(e) => setBook({...book, title: e.target.value})}
            required
          ></Form.Control>
        </InputGroup>
      </Form.Group>
      {/* Champ for the book's author */}
      <Form.Group>
        <Form.Label>Auteur</Form.Label>
        <InputGroup>
          <Form.Control type="text"
            value={book.author}
            onChange={(e) => setBook({...book, author: e.target.value})}
            required
          ></Form.Control>
        </InputGroup>
      </Form.Group>
      {/* Champ for the book summary */}
      <Form.Group>
        <Form.Label>Résumé</Form.Label>
        <Form.Control as="textarea" rows={5}
          value={book.summary}
          onChange={(e) => setBook({...book, summary: e.target.value})}
          required
        ></Form.Control>
      </Form.Group>
      {/* Book genre field */}
      <Form.Group>
        <Form.Label>Genre(s)</Form.Label>
        <InputGroup>
          <Form.Control type="text"
            value={book.genres}
            onChange={(e) => setBook({...book, genres: e.target.value})}
            required
          ></Form.Control>
        </InputGroup>
      </Form.Group>
      {/* Book cover field */}
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
      {/* Submit form button */}
      <div className="mt-4 d-flex justify-content-between">
        <Button variant="secondary" onClick={props.onShelve}>Retour</Button>
        <Button type="submit" variant="primary">{creation ? "Ajouter" : "Mettre à jour"}</Button>
      </div>
      {message && <p className="multiLineText mt-3">{message}</p>}
      </Form>
    </>
  );
};

export default BookCreateFormCmpt;
