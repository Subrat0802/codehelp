const Tag = require("../models/Tags");

//create tag ka handler function

exports.createTag = async(req, res) => {
    try{
        //fetch data
        const {name, description} = req.body;

        //validation
        if(!name || !description) {
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }

        //create an entery in db
        const tagDetails = await Tag.create({
            name:name,
            description:description
        })
        console.log(tagDetails);

        //return res
        return res.status(200).json({
            success:true,
            message:"Tag created successfully"
        })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}



//getAllTags handler function
exports.showAllTags = async (req, res) => {
    try{
        const allTags = await Tag.find({}, {name:true, description:true});
        res.status(200).json({
            success:true,
            message:"All tags returned successfully"
        })
    }catch(error){
        return res.status(500).json({
            sucess:false,
            message:error.message
        })
    }

}