// Importiamo il framework Express
const express = require('express');

const Post = require('../models/Post');

// Importiamo il modello commento
const Comment = require('../models/Comment');

// Creiamo un router di Express
const router = express.Router();

// Creazione di un nuovo commento
router.post('/',async(req,res)=>{
    try{
       const post=await Post.findById(req.body.post);
       const commentRes=await Comment.create(req.body);
        post?.comments.push(commentRes._id);
        post.save();
        res.status(201).json(post);
    }catch(error)
    {
        res.status(500).json({message:error.message})
    }
})

//Delete Route 
router.delete("/:commentId", async(req, res)=> {
    try{
        const commentId = req.params.commentId;
        const commentDeleteResp = await Comment.findByIdAndDelete({_id:commentId});
        res.status(201).json(commentDeleteResp);
    }catch(error)
    {
        res.status(500).json({message:error.message})
    }
})

// Esportiamo il router contenente le nostre rotte
module.exports = router;
