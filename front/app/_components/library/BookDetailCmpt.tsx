import React from 'react';
import { Accordion, Button, Card, CardBody } from 'react-bootstrap';
import { format } from "date-fns";

import type {Book} from '@/app/_types/Book';

const idFamily = 2;

// Composant BookDetail qui affiche les détails d'un livre et propose des actions de réservation et d'annulation
const BookDetailCmpt = (props: { book: Book; onEdit: any; refreshLibrary: any;}) => {
  let book: Book = props.book;

  // Borrow a book
  const onBorrowBook = () => {
    fetch('http://localhost:8000/api/borrows', {
      method: 'POST',
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify({
        isbn: book.isbn,
        idFamily: idFamily,
        borrowDate: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
      })
    })
  };

  // Delete à book
  const onDeleteBook = () => {
    if (window.confirm('Etes-vous sûr de vouloir supprimer ce livre ?\nISBN:'+book.isbn+'\nTitre:'+book.title)) {
      fetch('http://localhost:8000/api/books/'+book.isbn, {
        method: 'DELETE'
      })
      .then(response => {
        props.refreshLibrary();
      });
    }
  };

  return (
    <div className="col-lg-4 col-md-6 pb-4">
    <Card className="w-100 h-100 p-2">
      {/* Image de la couverture du livre*/}
      <Card.Img variant="top" src={`/books/${book.isbn}.jpg`} alt={`${book.title} cover`} height={400} 
          onError={({ currentTarget }) => {
            if (currentTarget.src.includes("default.jpg")) return; // prevents looping
            currentTarget.onerror = null;
            currentTarget.src="/books/default.jpg";
          }}/>
      <CardBody>
        {/* Titre du livre */}
        <Card.Title>{book.title}</Card.Title>
        {/* Auteur du livre */}
        <Card.Subtitle className="text-muted">{book.author}</Card.Subtitle>
      </CardBody>
      <CardBody className="bookCardBottom">
        {/* Résumé du livre avec un menu déroulant */}
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Résumé</Accordion.Header>
            <Accordion.Body>
              <Card.Text>{book.summary}</Card.Text>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        {/* Bouton pour réserver le livre */}
        <Button variant="primary" className="mt-2 w-100" onClick={() => onBorrowBook(book.isbn)}>Réserver</Button>
        <Button variant="warning" className="mt-2 w-100" onClick={() => props.onEdit(book.isbn)}>Modifier</Button>
        <Button variant="danger" className="mt-2 w-100" onClick={() => onDeleteBook(book.isbn)}>Supprimer</Button>
      </CardBody>
    </Card>
    </div>
  );
};

export default BookDetailCmpt;
