// blog.js

const express = require("express");
const router = express.Router();

const {dummyLink, likePost, unlikePost} = require("../controllers/LikeController");
const { createComments } = require("../controllers/CommentController");
const { createPost, getAllPosts } = require("../controllers/PostController");


router.get("/dummy", dummyLink)
router.post("/comments/create", createComments)
router.post("/posts/create", createPost)
router.get("/getAllPost", getAllPosts)
router.post("/likes/like", likePost)
router.post("/likes/like", unlikePost)

module.exports = router;


