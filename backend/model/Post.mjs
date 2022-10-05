import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    message:{
        type: String,
        unique: true
    },
    email:{
        type: String,
        required: true
    },
    image:{
        type: String
    }
});
const Post = mongoose.model('post', postSchema);

export { Post};