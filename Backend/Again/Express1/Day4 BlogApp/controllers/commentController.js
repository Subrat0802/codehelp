// Import models
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

// Business logic
exports.createComment = async (req, res) => {
    try {
        // Fetch data from req body
        const { post, user, body } = req.body;

        // Create a comment object
        const comment = new Comment({
            post,
            user,
            body,
        });

        // Save the new comment into the database
        const savedComment = await comment.save();

        // Find the post by ID and add the new comment to its comments array
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $push: { comments: savedComment._id } },
            { new: true }
        )
            .populate("comments")  // Populate the comments array with comment documents
            .exec();

        res.json({
            post: updatedPost,
            comment: savedComment, // Optionally, you can also send back the created comment
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Error while creating Comment",
        });
    }
};
