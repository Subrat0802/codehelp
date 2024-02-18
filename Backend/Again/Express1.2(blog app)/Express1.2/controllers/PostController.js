const Post = require("../models/PostModel");


exports.createPost = async (req, res) => {
    try{
        const {title, body} = req.body;
        const post = new Post({
            title, body
        });
        const savedPost = await post.save();

        res.json({
            post:savedPost
        })
    }
    catch(error){
        return res.status(400).json({
            error:"Error while creating post"
        })
    }
}


exports.getAllPosts = async (req, res) => {
    try{
        const posts = await Post.find();
        res.json({
            posts
        })
    }catch(error){
        res.status(400).json({
            error:"Error"
        })
    }
}