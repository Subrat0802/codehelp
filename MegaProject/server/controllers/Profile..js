const Profile = require("../models/Profile");
const User = require("../models/User");

exports.updateProfile = async (req, res) => {
    try{
        //get data
        const {dateOfBirth="", about="", contactNumber, gender} = req.body;

        //fetch user id
        const id = req.user.id

        //validate
        if(!contactNumber || !gender || !id){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            });
        }

        //find Profile
        const userDetails = await User.findById(id);
        const profileId = userDetails.additionalDetails;
        const profileDetails = await Profile.findById(profileId)

        //update profile
        profileDetails.dateOfBirth = dateOfBirth;
        profileDetails.about = about;
        profileDetails.gender = gender;
        profileDetails.contactNumber = contactNumber;

        await profileDetails.save();


        //return res
        return res.status(200).json({
            success:true,
            message:"Profile details update successfully",
            profileDetails,
        })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            error:error.message
        })
    }
}


//delete account function
exports.deleteAccount = async(req, res) => {
    try{ 
        //get id
        const id = req.user.id;
        //validation
        const userDetails = await User.findById(id);
        if(!userDetails){
            return res.status(400).json({
                success:false,
                message:"User not found"
            })
        }

        //profile delete
        await Profile.findByIdAndDelete({_id: userDetails.additionalDetails});

        //delete user
        await User.findByIdAndDelete(id);

        //return res
        return res.status(200).json({
            success:true,
            message:"User deleted successfully"
        })

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Unable to delete user account"
        })
    }
}



exports.getAllUserDetails = async(req, res) => {
    try{
        //get id
        const id = req.user.id;

        //validation    
        const userDetails = await User.findById(id).populate("additionalDetails").exec();

        //return res
        return res.status(200).json({
            success:true,
            message:"User deta ferched successfully",
            userDetails
        })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}