// Importiamo Mongoose, specificando la sua importazione predefinita
const { default: mongoose } = require("mongoose");

// Definiamo lo schema del modello per i post utilizzando Mongoose
const postSchema = new mongoose.Schema({
    // Campo 'postText' per il testo del post, di tipo stringa e richiesto
    postText: {
        type: String,
        required: true
    },
    // Campo 'postCategory' per la categoria del post, di tipo stringa e richiesto,
    // con valori consentiti definiti tramite enum
    postCategory: {
        type: String,
        required: true,
        enum: ['movies', 'tv_series', 'games', 'music', 'books']
    },
    // Campo 'postTitle' per il titolo del post, di tipo stringa e richiesto
    postTitle: {
        type: String,
        required: true
    },
    // Campo 'postRating' per il rating del post, di tipo numero e richiesto,
    // con valori compresi tra 1 e 10
    postRating: {
        type: Number,
        required: true,
        min: 1,
        max: 10
    },
    // Campo 'createdAt' per la data di creazione del post, di tipo stringa
    createdAt: String,
    // Campo 'createdBy' per l'utente che ha creato il post,
    // che è un riferimento a un altro modello (ad es. il modello 'user')
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    // Campo 'imageUrl' per l'URL dell'immagine del post, di tipo stringa
    imageUrl: String,
    // Campo 'likes' come array per il numero di like delle recensioni
    likes:[{type:mongoose.Schema.Types.ObjectId,ref:'user'}],
    // Campo 'comments' come array per il numero di commenti delle recensioni
    comments:[{type:mongoose.Schema.Types.ObjectId,ref:'comment'}]
});

// Esportiamo il modello post definito sopra, utilizzando il nome "post" come identificatore del modello
module.exports = mongoose.model('post', postSchema);