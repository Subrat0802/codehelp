//import mongoose
const mongoose = require("mongoose");


//route handler
const likeSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId, //kis post pe like kiys hsi
        ref:"Post"
    },
    user:{
        type:String,  //kis user ne like kiys hai
        required: true
    }
})

//exports
module.exports = mongoose.model("Like", likeSchema);