//import mongoose
const mongoose = require("mongoose");

//route handler
const postSchema = new mongoose.Schema({
    title: {  //kya title hai post ka
        type: String,  //corrected: removed unnecessary nesting
        required: true, 
    },
    body: {  //kya content hai post ka
        type: String,
        required: true,
    },
    likes: [{   //kitne like hai post mai
        type: mongoose.Schema.Types.ObjectId,  
        ref: "Like"
    }],
    comments: [{   //kitne comment hai post mai
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
})

//exports
module.exports = mongoose.model("Post", postSchema);
