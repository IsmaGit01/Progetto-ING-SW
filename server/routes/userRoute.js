// Importiamo il framework Express
const express = require('express');

// Importiamo il modello utente
const User = require('../models/User');

// Creiamo un router di Express
const router = express.Router();

// Definiamo una route per ottenere tutti gli utenti
router.get('/', async (req, res) => {
    try {
        // Troviamo tutti gli utenti nel database
        const users = await User.find();
        // Restituiamo gli utenti come risposta JSON
        res.json(users);
    } catch (error) {
        // Se si verifica un errore, restituiamo un messaggio di errore con lo stato 500
        res.status(500).json({ message: error.message });
    }
});

// Definiamo una route per ottenere un utente tramite email
router.get('/:email', async (req, res) => {
    const userEmail = req.params.email;
    try {
        // Troviamo l'utente nel database tramite l'email fornita
        const user = await User.findOne({ email: userEmail });
        // Restituiamo l'utente trovato come risposta JSON
        res.json(user);
    } catch (error) {
        // Se si verifica un errore, restituiamo un messaggio di errore con lo stato 500
        res.status(500).json({ message: error.message });
    }
});

// Definiamo una route per creare un nuovo utente
router.post('/', async (req, res) => {
    try {
        // Otteniamo i dati dell'utente dalla richiesta
        const data = {
            name: req.body.name,
            email: req.body.email,
            image: req.body.image
        };

        // Cerchiamo un utente con l'email fornita e, se non trovato, lo creiamo
        const userRef = await User.findOneAndUpdate({ email: data.email }, data, {
            new: true,
            upsert: true,
            runValidators: true
        });

        // Salviamo l'utente nel database
        const userRes = await userRef.save();

        // Restituiamo l'utente appena creato come risposta con stato 201 (Created)
        res.status(201).json(userRes);
    } catch (error) {
        // Se si verifica un errore, restituiamo un messaggio di errore con lo stato 500
        res.status(500).json({ message: error.message });
    }
});

// Esportiamo il router contenente le nostre routes
module.exports = router;
