"use client"

import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { format } from "date-fns";

import type {Book} from '../../_types/Book';
import BookDetailCmpt from './BookDetailCmpt';

const idFamily = 2;
// TODO gérer les erreurs de récupération des livres

// LibraryPage component for displaying the library and managing books
const BookShelveCmpt = (props: { onCreate: any; }) => {
  // State to store the list of books
  const [books, setBooks] = useState([]);

  // When the page loads
  useEffect(() => {
    // Get books from the server
    fetch('http://localhost:8000/api/books')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error(error));
  }, []);

  // Book reservation management
  const handleReserveBook = (bookIsbn:string) => {
    fetch('http://localhost:8000/api/borrows', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        isbn: bookIsbn,
        idFamily: idFamily,
        borrowDate: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
      })
    })
  };

  return (
    <>
      <div className="row">
        <h2 className="col">Bibliothèque</h2>
        <Button variant="primary" className="col-auto" onClick={props.onCreate}>Ajouter un livre</Button>
      </div>
      <div className="row mt-4">
        {/* Displays details of each book in a map */}
        {books.map((bookItem:Book) => (
          <BookDetailCmpt key={bookItem.isbn} book={bookItem} onReserve={handleReserveBook} />
        ))}
      </div>
    </>
  );
};

export default BookShelveCmpt;
