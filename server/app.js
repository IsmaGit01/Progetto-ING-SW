// Importiamo il framework Express
const express = require('express');

// Importiamo il modulo per la gestione delle variabili d'ambiente
require('dotenv').config();

// Importiamo Mongoose per la connessione al database MongoDB
const { default: mongoose } = require('mongoose');

// Importiamo il modulo per abilitare CORS (Cross-Origin Resource Sharing)
const cors = require('cors');

// Creiamo un'istanza di Express
const app = express();

app.use(cors(
  {
    origin: ["https://progetto-ing-sw-api.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
  }
));
app.use(express.json())

mongoose.connect('mongodb+srv://ismamaataoui:Viiv9FxlqbWA4U2o@revapp.lrnnvdh.mongodb.net/test?retryWrites=true&w=majority&appName=RevApp')

app.get("/", (req, res) => {
  res.json("Hello from Isma!");
})
// Definiamo la porta su cui il server ascolterà le richieste
const port = 8000;

// Middleware per parsare le richieste JSON e abilitare CORS
app.use(express.json(), cors());

// URI per la connessione al database MongoDB preso dalle variabili d'ambiente
const uri = process.env.MONGODB_URL;

// Connessione al database MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Evento 'open' che indica che la connessione al database è avvenuta con successo
db.once('open', () => console.log("Connected"));

// Route di test
app.get('/', (req, res) => {
  res.send('Hellooo from Ismailee!');
});

// Route degli utenti
const userRoute = require('./routes/userRoute');
app.use('/user', userRoute);

// Route dei post
const postRoute = require('./routes/postRoute');
app.use('/post', postRoute);

// Avvio del server e ascolto delle richieste sulla porta specificata
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

