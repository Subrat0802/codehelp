const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
    try{
        const {title, body} = req.body;
        const post = new Post({title, body});
        const response = await post.save();

        return res.status(200).json({
            msg:"Post created",
            data:response
        })
    }catch(error){
        return res.status(500).json({
            msg:"error while creating post"
        })
    }
}
  
exports.getAllPost = async(req, res) =>{
    try{
        const response = await Post.find({});
        return res.status(200).json({
            msg:"get all posts",
            data:response
        })
    }catch(error){
        return res.status(500).json({
            msg:"error while fething all posts"
        })
    }
}