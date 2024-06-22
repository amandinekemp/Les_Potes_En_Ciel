// import React, { useState } from 'react';

// // Composant BookForm qui permet d'ajouter un nouveau livre à la bibliothèque
// const BookForm = ({ onSubmit }) => {
//   // États pour gérer les champs du formulaire
//   const [title, setTitle] = useState('');       // État pour le titre du livre
//   const [author, setAuthor] = useState('');     // État pour l'auteur du livre
//   const [summary, setSummary] = useState('');   // État pour le résumé du livre
//   const [cover, setCover] = useState('');       // État pour la couverture du livre

//   // Fonction de gestion de la soumission du formulaire
//   const handleSubmit = (e) => {
//     e.preventDefault();  // Empêche le rechargement de la page lors de la soumission du formulaire
//     const newBook = { title, author, summary, cover };  // Crée un nouvel objet livre avec les données du formulaire
//     onSubmit(newBook);  // Appelle la fonction onSubmit avec le nouvel objet livre
//     // Réinitialise les champs du formulaire après la soumission
//     setTitle('');
//     setAuthor('');
//     setSummary('');
//     setCover('');
//   };

//   return (
//     <form className="mt-4" onSubmit={handleSubmit}>
//       <h3>Ajouter un nouveau livre</h3>
//       {/* Champ pour le titre du livre */}
//       <div className="form-group">
//         <label>Titre</label>
//         <input
//           type="text"
//           className="form-control"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required 
//         />
//       </div>
//       {/* Champ pour l'auteur du livre */}
//       <div className="form-group">
//         <label>Auteur</label>
//         <input
//           type="text"
//           className="form-control"
//           value={author}
//           onChange={(e) => setAuthor(e.target.value)}
//           required 
//         />
//       </div>
//       {/* Champ pour le résumé du livre */}
//       <div className="form-group">
//         <label>Résumé</label>
//         <textarea
//           className="form-control"
//           value={summary}
//           onChange={(e) => setSummary(e.target.value)}
//           required 
//         ></textarea>
//       </div>
//       {/* Champ pour la couverture du livre */}
//       <div className="form-group">
//         <label>Couverture</label>
//         <input
//           type="text"
//           className="form-control"
//           value={cover}
//           onChange={(e) => setCover(e.target.value)}
//           required 
//         />
//       </div>
//       {/* Bouton de soumission du formulaire */}
//       <button type="submit" className="btn btn-success">Ajouter</button>
//     </form>
//   );
// };

// export default BookForm;
