const express = require("express");
const router = express.Router();

const {imageUpload, videoUpload, imageReducerUpload, localFileUpload} = require("../controllers/fileUpload")


//api route
router.post("/localFileUpload", localFileUpload);
router.post("/imageUpload", imageUpload);


//export
module.exports = router;