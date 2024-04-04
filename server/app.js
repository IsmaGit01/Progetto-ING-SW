const express = require('express');
require('dotenv').config()
const { default: mongoose } = require('mongoose');
var cors = require('cors')
const app = express();
const port = 8000; // Define your desired port


// Middleware to parse JSON requests
app.use(express.json(),cors());
const uri = process.env.MONGODB_URL; // Replace with your MongoDB URI and database name

//connecting MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
 const db=mongoose.connection;

db.once('open',()=>console.log("Connected"))


// Test Route
app.get('/', (req, res) => {
  res.send('Hellooo from Ismailee!');
});

//User Route
const userRoute = require('./routes/userRoute');
app.use('/user', userRoute,cors());

//Post Route
const postRoute = require('./routes/postRoute');
app.use('/post', postRoute,cors());

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});