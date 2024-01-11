const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstName: {
    typr: String,
    required: true,
    trim: true,
  },
  lastName: {
    typr: String,
    required: true,
    trim: true,
  },
  email:{
    type:String,
    required:true,
    trim:true
  },
  password: {
    typr: String,
    required: true,
  },
  accountType: {
    type: String,
    enum: ["Admin", "Student", "Instructor"],
    required: true,
  },
  additionalDetails: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Profile",
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  image: {
    type: String,
    required: true,
  },
  courseProgress: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:"CourseProgress"
    },
  ],
  token:{
    type:String,
  },
  resetPasswordExpires: {
    type:Date,
  }

});

module.exports = mongoose.model("User", userSchema);
