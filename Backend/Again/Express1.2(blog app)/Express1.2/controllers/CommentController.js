const Comment = require("../models/CommentModel,");
const Post = require("../models/PostModel");


exports.createComments = async (req, res) => {
    try{
        const {post, user, body} = req.body;

        const comment = new Comment({
            post,user,body
        })

        //save comment
        const savedComment = await comment.save();

        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id}}, {mew:true})
        // .populate("comments").exec();

        res.json({
            post:updatedPost
        })
    }
    catch(error){
        return res.status(500).json({
            error:"Error while creating comment"
        })
    }
}