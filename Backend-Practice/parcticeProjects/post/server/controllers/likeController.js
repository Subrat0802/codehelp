const Like = require("../models/likeModel");
const Post = require("../models/postModel");

exports.createLikes = async (req, res) => {
  try {
    const { post, user } = req.body;
    const like = new Like({ post, user });
    const response = await like.save();

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { likes: response._id } },
      { new: true }
    );

    return res.status(200).json({
      msg: "post Liked",
      data: updatedPost,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "post not liked",
    });
  }
};


exports.unlikePost = async(req, res) => {
    try{
        const {postId, likeId} = req.body;
        const deleteLike = await Like.findOneAndDelete({post:postId, _id:likeId});
        const updatePost = await Post.findByIdAndUpdate(postId, {$pull: {likes:deleteLike._id}}, {new:true})

        res.json({
            post:updatePost
        })
    }catch(error){
        return res.status(400).json({
            error: "Error while fetching post"
        })
    }
}