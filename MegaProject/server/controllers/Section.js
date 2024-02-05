const Section = require("../models/Section");
const Course = require("../models/Course");

exports.createSection = async (req, res) => {
  try {
    //data fetch
    const { sectionName, courseId } = req.body;

    //data validation
    if (!sectionName || !courseId) {
      return res.status(400).json({
        succes: false,
        message: "Missing Properties",
      });
    }

    //create section
    const newSection = await Section.create({ sectionName });

    //update section in course Schema with section Object iD
    const updatedCourseDetails = await Course.findByIdAndUpdate(
      courseId,
      {
        $push: {
          courseContent: newSection._id,
        },
      },
      { new: true }
    );
      //HW: usew populate to repalce section sub-section both in updated details

    //return res
    return res.status(200).json({
        success:true,
        message:"Section created successfully",
        updatedCourseDetails,
    })
  } catch (error) {
    return res.status(500).json({
        success:false,
        message:"Unable to create section , please try again later",
        error:error.message
    })
  }
};


exports.updateSetion = async (req, res) => {
    try{

        //data input 
        const {sectionName, sectionId} = req.body
        //data validation
        if (!sectionName || !sectionId) {
            return res.status(400).json({
              succes: false,
              message: "Missing Properties",
            });
          }

        //uppdate data
        const section = await Section.findByIdAndUpdate(sectionId, {sectionName}, {new:true})

        //return res
        return res.status(200).json({
            success:true,
            message:"Section updated successfully"

        })

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Unable to update section , please try again later",
            error:error.message
        })
    }
}


exports.deleteSection = async (req, res) => {
    try{
        //get id assuming we are sending id in params
        const {sectionId} = req.params

        //find by id and delete
        await Section.findByIdAndDelete(sectionId);

        //hw: do we need to delete the entery from the course schema

        //return res
        return res.status(200).json({
            success:true,
            message:"Section Deleted successfully"
        })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"Unable to delete section , please try again later",
            error:error.message
        })
    }
}