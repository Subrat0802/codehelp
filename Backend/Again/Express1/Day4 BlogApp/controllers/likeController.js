//models
const Post = require("../models/postModel");
const Like = require("../models/likeModel");

//like ka post
exports.likePost = async(req, res) => {
    try{
        const {post, user} = req.body;
        const like = new Like({
            post, user,
        })

        const savedLike = await like.save();

        //update post collection basis on this
        const updatePost = await Post.findByIdAndUpdate(post, {$push: {likes:savedLike._id}}, {new: true})
        .populate("likes").exec();

        res.json({
            post: updatePost
        })
    }
    catch(error){
        return res.status(400).json({
            error:"Error while liking the post",
        })
    }
}

//unlike post
exports.unlike = async(req, res) => {
    try{
        const {post, like} = req.body;
        //find and deletethe like collection me se
        const deletedLike = await Like.findOneAndDelete({post:post, _id:like})

        //update the post collection
        const updatePost = await Post.findByIdAndUpdate(post, {$pull: {likes: deletedLike._id}}, {new:true})

        res.json({
            post: updatePost
        })
    }
    catch(error){
        return res.status(400).json({
            error:"Error while Unliking the post",
        })
    }
}

exports.dummyLink = (req, res) => {
    res.send("This is dummy page")
};