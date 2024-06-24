import React from 'react';
import { Accordion, Button, Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import type {Book} from '../../_types/Book';

// Composant BookDetail qui affiche les détails d'un livre et propose des actions de réservation et d'annulation
const BookDetailCmpt = (props: { book: Book; onReserve: any; }) => {
  let book: Book = props.book;
  return (
    <Card>
      {/* Image de la couverture du livre*/}
      <Card.Img variant="top" src={`/books/${book.isbn}.jpg`} alt={`${book.title} cover`} height={400}/>
      <CardBody>
        {/* Titre du livre */}
        <Card.Title>{book.title}</Card.Title>
        {/* Auteur du livre */}
        <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
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
        <Button variant="primary" onClick={() => props.onReserve(book.isbn)}>Réserver</Button>
      </CardBody>
    </Card>
  );
};

export default BookDetailCmpt;
