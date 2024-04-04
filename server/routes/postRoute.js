const express=require('express');
const Post = require('../models/Post');

const router=express.Router();


//Get All Post

router.get('/',async(req,res)=>{
    try{

        const posts = await Post.find()
        .populate('createdBy')
        .sort({createdAt:-1}) //Ordina in base cronologica i post
        res.json(posts)
    }
    catch(error)
    {
        res.status(500).json({message:error.message})
    }
})

//Create New Post

router.post('/',async(req,res)=>{
    try{

        //Data fetch
        const data={
            postText:req.body.postText,
            postCategory:req.body.postCategory,
            postTitle:req.body.postTitle,
            postRating:req.body.postRating,
            createdAt:req.body.createdAt,
            createdBy:req.body.createdBy,
            imageUrl:req.body.imageUrl
        }

        //Create new data everytime
        const postRes= await Post.create(data);
        res.status(201).json(postRes);
    }catch(error)
    {
        res.status(500).json({message:error.message})
    }
})



module.exports=router;

