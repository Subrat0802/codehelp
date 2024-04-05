const Like = require("../models/likeModel");
const Post = require("../models/postModel");
 
exports.createLike = async(req, res) => {
    try{
        const {post, user} = req.body
        const like = new Like({
            post, user,
        });
        const savedLike = await like.save();

        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {likes: savedLike._id}}, {new:true})
            .populate("likes").exec();

        res.json({
            post:updatedPost
        })
    }catch(error){
        return res.status(401).json({
            message:"Error while creating like"
        })
    }
}