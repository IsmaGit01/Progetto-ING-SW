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
            .populate('likes') // Popoliamo il campo 'likes' con i dati dei like del post
            .populate({ // Popoliamo il campo 'comment' con i dati dei commenti del post
                path:'comments',
                populate:{
                    path:'createdBy',
                    model:'user'
                }
            }) 
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

// Definiamo una route per Like/Dislike dei Post/Reviews

router.put("/like/:postId",async(req,res)=>{
    try {
        // Estrai postId dai parametri della richiesta
        const postId = req.params.postId;

        // Crea un oggetto dati con userId e isLike dal corpo della richiesta
        const data = {
            userId:req.body.userId,
            isLike:req.body.isLike
        }

        // Trova il post tramite il suo postId
        const post = await Post.findById(postId);

        // Se il post non ha ancora Mi Piace, inizializza l'array dei Mi Piace
        if (!post.likes)
        {
            const updatePost=await Post.findByIdAndUpdate(postId,
                {likes:[]}, // Inizializza l'array dei Mi Piace
                {upsert:true, // Crea un nuovo post se non trovato
                runValidators:true}, // Esegui i validatori per la validazione dello schema
            );

            // Salva il post aggiornato
            await updatePost.save();
        }

        // Recupera il post aggiornato dopo l'inizializzazione
        const updatedPost = await Post.findById(postId);

        // Aggiungi o rimuovi l'userId dall'array dei Mi Piace in base al valore di isLike
        data.isLike ? updatedPost.likes.push(data.userId) : updatedPost.likes.pop(data.userId);
        
        // Salva il post aggiornato nel database
        const result = await updatedPost.save()

        // Restituisci una risposta JSON con lo stato 201 e il risultato della salvataggio
        res.status(201).json(result);
    } catch(error)
    {
        res.status(500).json({message:error.message})
    }
})

// Definiamo una route per eliminare un post
router.delete("/:postId", async(req, res)=> {
    try {
        const postId = req.params.postId;
        const postDeleteResp = await Post.findByIdAndDelete(postId);
        if (!postDeleteResp) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.status(200).json(postDeleteResp);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Esportiamo il router contenente le nostre routes
module.exports = router;