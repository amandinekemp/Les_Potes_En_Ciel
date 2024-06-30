// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const ActivityDetails = () => {
//   const { id } = useParams();
//   const [activity, setActivity] = useState(null);
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     // Fetch activity details from the server
//     fetch(`/api/activity/${id}`)
//       .then(response => response.json())
//       .then(data => setActivity(data));
//   }, [id]);

//   const handleSignup = () => {
//     // Handle signup logic
//     fetch(`/api/activity/${id}/signup`, {
//       method: 'POST',
//     })
//     .then(response => response.json())
//     .then(data => {
//       if (data.success) {
//         setActivity(prevActivity => ({
//           ...prevActivity,
//           registeredUsers: prevActivity.registeredUsers + 1,
//           availableSeats: prevActivity.availableSeats - 1,
//         }));
//         setMessage('Inscription réussie!');
//       } else {
//         setMessage('Erreur lors de l\'inscription.');
//       }
//     });
//   };

//   const handleCancel = () => {
//     // Handle cancel logic
//     fetch(`/api/activity/${id}/cancel`, {
//       method: 'POST',
//     })
//     .then(response => response.json())
//     .then(data => {
//       if (data.success) {
//         setActivity(prevActivity => ({
//           ...prevActivity,
//           registeredUsers: prevActivity.registeredUsers - 1,
//           availableSeats: prevActivity.availableSeats + 1,
//         }));
//         setMessage('Inscription annulée.');
//       } else {
//         setMessage('Erreur lors de l\'annulation.');
//       }
//     });
//   };

//   if (!activity) return <p>Chargement...</p>;

//   return (
//     <div className="container mt-5">
//       <h2>{activity.title}</h2>
//       <p>{activity.description}</p>
//       <p>Date: {activity.date}</p>
//       <p>Heure: {activity.time}</p>
//       <p>Lieu: {activity.location}</p>
//       <p>Places disponibles: {activity.availableSeats}</p>
//       <p>Personnes inscrites: {activity.registeredUsers}</p>
//       <button className="btn btn-primary mr-2" onClick={handleSignup}>S'inscrire</button>
//       <button className="btn btn-danger" onClick={handleCancel}>Annuler l'inscription</button>
//       {message && <p className="mt-3">{message}</p>}
//     </div>
//   );
// };

// export default ActivityDetails;
