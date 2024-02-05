const Course = require("../models/Course");
const Tag = require("../models/Tags");
const User = require("../models/User");
const {uploadImageToClodinary} = require("../utils/ImageUploader");


//createCoures Handler function tag
exports.createCourse = async(req, res) => {
    try{
        //fetch data
        const {courseName, courseDescription, whatYouWillLearn, price, tag} = req.body;

        //getThumbnail
        const thumbnail = req.files.thumbnailImage

        //validation
        if(!courseName || !courseDescription || !whatYouWillLearn || !price || !tag){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }

        //check for instructor
        const userId = req.user.id;
        const instructorDetails = await User.findById(userId);
        console.log("Instructor Details:", instructorDetails);


        if(!instructorDetails){
            return res.status(404).json({
                success:false,
                message:"Instructor Details not found",
            })
        }

        //check given is valid or not
        const tagDetails = await Tag.findById(tag);
        if(!tagDetails){
            return res.status(404).json({
                success:false,
                message:"Tag Details not found",
            })
        }

        //upload image to cloudinary
        const thumbnailImage  =await uploadImageToClodinary(thumbnail, process.env.FOLDER_NAME);

        //create an entery for new course
        const newCourse = await Course.create({
            courseName,
            courseDescription,
            instructor: instructorDetails._id,
            whatYouWillLearn,
            price,
            tag:tagDetails._id,
            thumbnail:thumbnailImage.secure_url
        })

        //user update - add the new course to user schema of instructor
        await User.findByIdAndUpdate(
            {_id: instructorDetails._id},
            {
                $push: {
                    courses:newCourse._id,
                }
            },
            {new:true},            
        )

        //update the tag schema
        //totdo hw

        //return res
        return res.status(200).json({
            success:true,
            message:"Course Created Successfully",
            data:newCourse
        })

    }
    catch(error){
        console.error(error);
        return res.status(401).json({
            success:false,
            message:"Failed to create course",
            error:error.message
        })
    }
}


//get All cousres

exports.showAllCourses = async (req, res) => {
    try{
        const allCourses = await Course.find({});

                return res.status(200).json({
                success:true,
                message:"Data for all cousres is fetched",
                data:allCourses
            })
}
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Cannot fetch course data",
            error:error.message
        })
    }
}