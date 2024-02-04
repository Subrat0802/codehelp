const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
   courseName:{
    type:String,
    trim:true
   },
   courseDescription:{
    type:String,
    trim:true
   },
   instructor:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
    required:true
   },
   whatYouWillLearn:{
    type:String,
   },
   courseContent:[
    {
        type:mongoose.Schema.Types.ObjectId,
        rref:"Section"
    }
   ],
   ratingAndReviews:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"RatingAndReviews"
    }
   ],
   price:{
    type:String
   },
   thumbnail:{
    type:String
   },
   tag:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Tag"
   },
   studentsEnrolle:[
    {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    }
   ]
});

module.exports = mongoose.model("Course", courseSchema);
