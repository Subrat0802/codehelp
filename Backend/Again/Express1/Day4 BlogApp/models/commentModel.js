//import mongoose
const mongoose = require("mongoose");


//route handler
const commentSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId, //kis post pe comment kiya hai
        ref:"Post" //referance to the post model 
    },
    user: {  //kis user ne comment kiya hai
        type:String,
        required:true,
    },
    body: {  //kya comment kiya hai
        type:String,
        required:true
    }
})



//export
module.exports = mongoose.model("Comment", commentSchema);