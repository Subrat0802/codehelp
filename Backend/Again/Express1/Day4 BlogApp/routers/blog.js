const express = require("express");
const router = express.Router();


//import controllers
const { dummyLink, likePost, unlike } = require("../controllers/likeController");
const { createComment } = require("../controllers/commentController");
const { createPost, getAllPosts } = require("../controllers/postController");



//mapping create
router.get("/dummyLink", dummyLink)
router.post("/comments/create", createComment);
router.post("/post/create", createPost)
router.get("/posts", getAllPosts)
router.post("/likes/like", likePost)
router.post("/likes/unlike", unlike)


//export
module.exports = router;