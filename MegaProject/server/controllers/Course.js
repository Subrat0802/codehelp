const Course = require("../models/Course");
const Tag = require("../models/Tags");
const User = require("../models/User");
const { uploadImageToCloudinary } = require("../utils/imageUploader");

//createCourse Handler function
exports.createCourse = async (req, res) => {
  try {
    //fetch data
    const { courseName, courseDescription, whatYouWillLearn, price, tag } =
      req.body;

    //get Thumbnail
    const thumbnail = req.files.thumbnailImage;

    //validation
    if (
      !courseName ||
      !courseDescription ||
      !whatYouWillLearn ||
      !price ||
      !tag ||
      !thumbnail
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    //check for Instructor
    const userId = req.id;
    const InstructorDetails = await User.findById(userId);
    console.log("Instructor Details: ", InstructorDetails);

    if (!InstructorDetails) {
      return res.status(404).json({
        success: false,
        message: "Instrucot Details not found",
      });
    }

    //check given tag is valid or not
    const tagDetails = await Tag.findById(tag);
    if (!tagDetails) {
      return res.status(404).json({
        success: false,
        message: "Instrucot Details not found",
      });
    }

    //upload image to cloudoinery
    const thumbnailImage = await uploadImageToCloudinary(
      thumbnail,
      process.env.FOLDER_NAME
    );

    //create an entry for new course
    const newCourse = await Course.create({
      courseName,
      courseDescription,
      instructor: InstructorDetails._id,
      price,
      whatYouWillLearn: whatYouWillLearn,
      tag: tagDetails._id,
      thumbnail: thumbnailImage.secure_url,
    });

    //add the new course to the user Schema of instructor
    await User.findByIdAndUpdate(
      { _id: InstructorDetails._id },
      {
        $push: {
          courses: newCourse._id,
        },
      },
      { new: true }
    );

    //tag schema hw

    return res.status(200).json({
      success: true,
      message: "Course Created Successfully",
      date: newCourse,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to create course",
      error: error.message,
    });
  }
};

//getAllCourses handler function

exports.showAllCOurses = async (req, res) => {
  try {
    const getAllCourses = await Course.find(
      {},
      { courseName: true, price: true, thumbnail: true, instructor:true, ratingAndReviews:true,
    studentsEnrolled:true,  }
    ).populate("instructor").exec();

    return res.status().json({
        success:true,
        message:"All course data fetched Successfully"
    })

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Not fetched the create course",
      error: error.message,
    });
  }
};
