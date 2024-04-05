const express = require("express");
const { createPost, getAllPosts } = require("../controllers/postCon");
const { createComment } = require("../controllers/commentCon");
const { createLike } = require("../controllers/LikeCon");
const router = express.Router();

router.post("/createPost", createPost);
router.get("/getAllPosts", getAllPosts);createComment
router.post("/createComment", createComment); 
router.post("/createLike", createLike);

module.exports = router;