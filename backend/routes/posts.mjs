import mongoose from "mongoose";
import bodyParser from "body-parser";
import express from "express";
import { Post } from "../model/Post.mjs";

const PostRouter = express.Router();

PostRouter.use(bodyParser.json());

PostRouter.post('/post', async (req,res)=>{
    try{
       const post = req.body;
       await Post.create({message: post.message, email: post.email, image: post.image});
    }
catch(e){
     res.status(400);
}
try{
     const posts = await Post.find({});
     return res.status(200).json(posts);
}
catch(err){
     return res.status(400).send(err.message);

}
});

export default PostRouter;