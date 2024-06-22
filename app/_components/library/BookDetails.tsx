import React from 'react';
import { Card } from 'react-bootstrap';
import type {Book} from '../../_types/Book';

// Composant BookDetails qui affiche les détails d'un livre et propose des actions de réservation et d'annulation
const BookDetails = (props: { book: Book; onReserve: any; }) => {
  let book: Book = props.book;
  let onReserve = props.onReserve;
  return (
    <Card>
      {/* Image de la couverture du livre*/}
      <Card.Img variant="top" src={`/books/${book.isbn}.jpg`} alt={`${book.title} cover`} height={400}/>
      <div className="card-body">
        {/* Titre du livre */}
        <h5 className="card-title">{book.title}</h5>
        {/* Auteur du livre */}
        <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
        {/* Résumé du livre */}
        <p className="card-text">{book.summary}</p>
        {/* Bouton pour réserver le livre */}
        <button className="btn btn-primary mr-2" onClick={() => onReserve(book.isbn)}>Réserver</button>
      </div>
    </Card>
  );
};

export default BookDetails;
