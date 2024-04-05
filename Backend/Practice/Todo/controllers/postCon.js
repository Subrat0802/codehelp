const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
    try{
        const {title, body} = req.body;
        const post = new Post({title, body});

        const response = await post.save();

        res.json({
            message:"Post created",
            data:response
        })

    }catch(error){
        res.json({
            message:"Error while creating post"
        })
    }
}

exports.getAllPosts = async(req, res ) => {
    try{
        const response = await Post.find({});

        res.json({
            data:response,
            message:"All posts"
        })
    }catch(error){
        res.json({
            message:"Error while finding all posts"
        })
    }
}