// Importiamo il framework Express
const express = require('express');

// Importiamo il modello post
const Post = require('../models/Post');

// Creiamo un router di Express
const router = express.Router();

// Definiamo una route per ottenere tutti i post
router.get('/', async (req, res) => {
    try {
        // Troviamo tutti i post nel database
        const posts = await Post.find()
            .populate('createdBy') // Popoliamo il campo 'createdBy' con i dati dell'utente che ha creato il post
            .sort({ createdAt: -1 }); // Ordiniamo i post in base alla data di creazione in ordine decrescente
        // Restituiamo i post come risposta JSON
        res.json(posts);
    } catch (error) {
        // Se si verifica un errore, restituiamo un messaggio di errore con lo stato 500
        res.status(500).json({ message: error.message });
    }
});

// Definiamo una route per creare un nuovo post
router.post('/', async (req, res) => {
    try {
        // Otteniamo i dati del post dalla richiesta
        const data = {
            postText: req.body.postText,
            postCategory: req.body.postCategory,
            postTitle: req.body.postTitle,
            postRating: req.body.postRating,
            createdAt: req.body.createdAt,
            createdBy: req.body.createdBy,
            imageUrl: req.body.imageUrl
        };

        // Creiamo un nuovo post nel database utilizzando il modello Post
        const postRes = await Post.create(data);
        
        // Restituiamo il post appena creato come risposta con stato 201 (Created)
        res.status(201).json(postRes);
    } catch (error) {
        // Se si verifica un errore, restituiamo un messaggio di errore con lo stato 500
        res.status(500).json({ message: error.message });
    }
});

// Esportiamo il router contenente le nostre routes
module.exports = router;