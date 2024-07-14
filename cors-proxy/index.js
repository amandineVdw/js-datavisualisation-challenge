const express = require('express');
const fetch = require('node-fetch'); // Importer fetch pour Node.js
const cors = require('cors'); // Importer le module CORS
const app = express();
const port = 3000;

// Middleware CORS pour toutes les routes
app.use(cors({
  origin: 'http://localhost:5500', // Autoriser uniquement les requêtes depuis ce domaine
  methods: ['GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'], // Méthodes HTTP autorisées
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'] // En-têtes autorisés
}));

// Route pour le proxy
app.get('/proxy', async (req, res) => {
    try {
        const url = req.query.url;
        const response = await fetch(url); // Utiliser fetch pour faire la requête HTTP
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.text(); // Récupérer les données de la réponse
        res.send(data);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Proxy server running at http://localhost:${port}`);
});
