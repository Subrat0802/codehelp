const express = require("express");
const {createPost, getAllPost} = require("../controllers/postController");
const { createLikes, unlikePost } = require("../controllers/likeController");
const { createComments } = require("../controllers/commentController");
const router = express.Router();

router.post("/createPost", createPost)
router.get("/getallposts", getAllPost)
router.post("/createLikes", createLikes)
router.post("/createComments", createComments)
router.post("/unlikePost", unlikePost)

module.exports = router;