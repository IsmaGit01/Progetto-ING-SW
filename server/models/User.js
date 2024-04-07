// Importiamo Mongoose, specificando la sua importazione predefinita
const { default: mongoose } = require("mongoose");

// Definiamo lo schema del modello utente utilizzando Mongoose
const userSchema = new mongoose.Schema({
    // Definiamo il campo 'name' come una stringa richiesta (non può essere vuoto)
    name: {
        type: String,
        required: true
    },
    // Definiamo il campo 'email' come una stringa richiesta (non può essere vuoto)
    email: {
        type: String,
        required: true
    },
    // Definiamo il campo 'image' come una stringa, che non è richiesta (può essere vuota)
    image: String
});

// Esportiamo il modello utente definito sopra, utilizzando il nome "user" come identificatore del modello
module.exports = mongoose.model('user', userSchema);