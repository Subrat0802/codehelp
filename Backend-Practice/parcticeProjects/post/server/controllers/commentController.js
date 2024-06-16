const Comment = require("../models/commentModel");
const Post = require("../models/postModel");

exports.createComments = async (req, res) => {
    try{
        const {post, user, body} = req.body;
        const comments = new Comment({post, user, body});
        const response = await comments.save();

        const savedComments = await Post.findByIdAndUpdate(post, {$push: {comments:response._id}}, {new:true}).populate("comments").exec()

        return res.status(200).json({
            msg:"comment created",
            data:savedComments,
           
        })

    }catch(error){
        return res.status(500).json({
            msg:"comment not created"
        })
    }
}