const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

let users = []; // Temporary in-memory storage for registered users

app.post('/register', (req, res) => {
  const { firstName, lastName, email, password, address, zipCode, city } = req.body;

  // Server-side validation
  if (!firstName || !lastName || !email || !password || !address || !zipCode || !city) {
    return res.status(400).send("Tous les champs sont obligatoires.");
  }

  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).send("L'adresse e-mail est déjà utilisée.");
  }

  // Register the user
  users.push({ firstName, lastName, email, password, address, zipCode, city });

  res.send("Inscription réussie !");
});

app.get('/home', (req, res) => {
  const name = req.query.name || "Guest";
  res.send(`<h1>Bienvenue, ${name}!</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
