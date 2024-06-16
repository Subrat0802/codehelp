//import model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

//business logic

exports.createComment = async (req, res) => {
    try{
        // fetch data from request body
        const {post, user, body} = req.body;
        //create a comment object
        const comment = new Comment({
            post, user, body
        });

        //save the new comment into the db
        const savedComment = await comment.save();

        //find the post by Id, add the new comment to its comments array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id}}, {new:true})
            .populate("comments") //populate the comment array with documents
            .exec();
        
            res.json({
                post:updatedPost,
            });
 
    }
    catch(err){
        return res.status(500).json({
            err: "Error while creating comment"
        })
    }   
}