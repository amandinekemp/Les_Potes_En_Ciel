{/*
import React, { useState, useEffect } from 'react';

const FormAdminActivity = ({ activityId }) => {
  const [activity, setActivity] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    availableSeats: '',
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (activityId) {
      // Fetch existing activity details for editing
      fetch(`/api/activity/${activityId}`)
        .then(response => response.json())
        .then(data => setActivity(data));
    }
  }, [activityId]);

  const handleChange = (e) => {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to the server
    const url = activityId ? `/api/activity/${activityId}` : '/api/activity';
    const method = activityId ? 'PUT' : 'POST';

    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(activity),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        setMessage('Activité enregistrée avec succès.');
      } else {
        setMessage('Erreur lors de l\'enregistrement.');
      }
    });
  };

  return (
    <div className="container mt-5">
      <h2>{activityId ? 'Modifier l\'activité' : 'Créer une nouvelle activité'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Titre</label>
          <input 
            type="text" 
            className="form-control" 
            id="title" 
            name="title" 
            value={activity.title} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea 
            className="form-control" 
            id="description" 
            name="description" 
            value={activity.description} 
            onChange={handleChange} 
            required 
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input 
            type="date" 
            className="form-control" 
            id="date" 
            name="date" 
            value={activity.date} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Heure</label>
          <input 
            type="time" 
            className="form-control" 
            id="time" 
            name="time" 
            value={activity.time} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Lieu</label>
          <input 
            type="text" 
            className="form-control" 
            id="location" 
            name="location" 
            value={activity.location} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="availableSeats">Places disponibles</label>
          <input 
            type="number" 
            className="form-control" 
            id="availableSeats" 
            name="availableSeats" 
            value={activity.availableSeats} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary">Enregistrer</button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default FormAdminActivity;
*/}