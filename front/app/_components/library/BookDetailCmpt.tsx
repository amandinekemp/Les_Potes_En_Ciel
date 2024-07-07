import React from 'react';
import { Accordion, Button, Card, CardBody, CardFooter } from 'react-bootstrap';
import type {Book} from '../../_types/Book';

// Composant BookDetail qui affiche les détails d'un livre et propose des actions de réservation et d'annulation
const BookDetailCmpt = (props: { book: Book; onReserve: any; }) => {
  let book: Book = props.book;
  return (
    <div className="col-4 pb-4">
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
        <Button variant="primary" className="mt-2 w-100" onClick={() => props.onReserve(book.isbn)}>Réserver</Button>
      </CardBody>
    </Card>
    </div>
  );
};

export default BookDetailCmpt;
