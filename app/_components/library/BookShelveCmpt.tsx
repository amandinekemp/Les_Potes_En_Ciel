"use client"

import React, { useState, useEffect } from 'react';
import type {Book} from '../../_types/Book';
import BookDetailCmpt from './BookDetailCmpt';
import BookCreateForm from './BookCreateForm';

// Composant LibraryPage qui affiche la bibliothèque et permet de gérer les livres
const BookShelveCmpt = () => {
  // const [books, setBooks] = useState([]);  // État pour stocker la liste des livres

  // useEffect(() => {
    // Récupérer les livres depuis le serveur lors du montage du composant
    // fetch('/api/books')
    //   .then(response => response.json())
    //   .then(data => setBooks(data));
  // }, []);
  const books = ([
    {
      isbn: "2317023634",
      title: "Être père: Une place à prendre au quotidien",
      author: "Olivier Foissac",
      summary: "S’il est évident que les pères s’investissent toujours plus dans leur parentalité, accueillir un enfant reste un défi considérable. En lutte constante contre l’éducation qu’ils ont reçue, les stéréotypes de genre ou bien tout simplement le regard de la société, les pères s’interrogent aujourd’hui plus que jamais.",
    },
    {
      isbn: "9782845942486",
      title: "La Naissance en bandes dessinées - Tome I - Découvrez vos super pouvoirs !",
      author: "Lucile Gomez",
      summary: "Ce livre est inutile: ce qu’il explique, les femmes le savent déjà. Mais elles ne savent pas qu’elles savent. Leur cerveau conscient, intelligent, leur néocortex surdéveloppé d’être humain, rempli de peurs depuis des siècles, les poussent à accepter une surmédicalisation de la naissance. Considérées comme le « sexe faible », elles ont fini par croire qu’accoucher était forcément douloureux, dangereux, violent… et qu’elles en étaient incapables sans médecins.",
    },
    {
      isbn: "9782957698929",
      title: "Le petit illustré des conceptions, de l'adoption, des familles, de la parentalité, etc.",
      author: "Tiphaine Dieumegard",
      summary: "Les petits illustrés de l’intimité sont les tout premiers livres engagés, inclusifs et sans tabou pour parler aux enfants d’anatomie et d’intimité. Ce troisième tome est composé de deux parties : Une partie anatomique et scientifique (avec de la fécondation, le développement du bébé, la gémellité, les différentes techniques de PMA, la naissance, l’allaitement, l’adoption, le deuil périnatal, etc.) Et une partie plus sociologique (avec les différentes familles, l’éducation, les droits de l’enfant, etc.) Ainsi qu’un lexique et une page listant les contacts d’associations.Ce tome a également reçu le label de la chaire UNESCO santé sexuelle et droits humains.",
    },
    {
      isbn: "9782092783726",
      title: "Le sommeil conseils et astuces au quotidien",
      author: "Madeleine Deny",
      summary: "Un livre futé, truffé de conseils pour aider les parents à surmonter les problèmes de sommeil de leur enfant. Pour chaque âge, des situations quotidiennes analysées pour dédramatiser et bien réagir. Des astuces et des conseils 'testés et approuvés' pour trouver ses solutions. Les réponses précises d'experts à toutes vos questions... sans oublier beaucoup d'humour et de tendresse, les meilleurs alliés d'une vie de famille réussie !",
    },
  ]);

  // Gestion de la réservation d'un livre
  const handleReservation = (bookIsbn:string) => {
    // Logique pour réserver un livre
    console.log(`Réserver le livre ${bookIsbn}`);
  };

  // // Gestion de l'annulation d'une réservation de livre
  // const handleCancelReservation = (bookId) => {
  //   // Logique pour annuler une réservation de livre
  // };

  // Gestion de l'ajout d'un nouveau livre
  const handleAddBook = (bookIsbn:string) => {
    // Logique pour ajouter un livre
  };

  // // Gestion de la modification d'un livre existant
  // const handleEditBook = (bookId, updatedBook) => {
  //   // Logique pour modifier un livre
  // };

  // // Gestion de la suppression d'un livre
  // const handleDeleteBook = (bookId) => {
  //   // Logique pour supprimer un livre
  // };

  return (
    <div className="container mt-5">
      <h2>Bibliothèque</h2>
      <div className="row">
        {/* Affiche les détails de chaque livre dans une carte */}
        {books.map((bookItem:Book) => (
          <div key={bookItem.isbn} className="col-md-4 mb-4">
            <BookDetailCmpt book={bookItem} onReserve={handleReservation}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookShelveCmpt;
