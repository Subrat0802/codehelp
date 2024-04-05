const Comment = require("../models/CommentModel");
const Post = require("../models/postModel");
 
exports.createComment = async(req, res) => {
    try{
        const {post, body, user} = req.body;
        const comment = new Comment({post, body, user});
        const commentRes = await comment.save();

        const postRes = await Post.findByIdAndUpdate(post, {$push: {comments:commentRes._id}}, {new:true});

        res.json({
            message:"Comment added successfully",
            data:commentRes
        })

    }catch(error){
        return res.status(401).json({
            message:"Error while creating comment"
        })
    }
}