const File = require("../models/file");
const cloudinary = require("cloudinary").v2

//localfile upload
exports.localFileUpload = async(req, res) => {
    try{
        //fetch file
        const file = req.files.file;
        console.log("file first", file);
        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
        console.log("Path", path)
        
        file.mv(path, (err) => {
            console.log(err);
        })
        res.json({
            success:true,
            message:"Loacal file uploaded"
        })
    }catch(error){
        console.log(error)
    }
}


function fileTypeSupported(fileType, supportedType){
    return supportedType.includes(fileType)
}

async function uploadFileToCloudinary(file, folder, quality){
    const options = {folder}
    if(quality){
        options.quality = quality
    }
    options.resource_type = "auto";
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

exports.imageUpload = async (req, res) => {
    try{
        const {name, tags, email} = req.body;
        const file = req.files.imageFile;
        const supportedType = ["jpg", "jpeg", "png"];
        const fileType = file.name.split('.')[1].toLowerCase();

        if(!fileTypeSupported(fileType, supportedType)){
            return res.status(400).json({
                success:false,
                msg:"file format not supported"
            })
        }

        const response = await uploadFileToCloudinary(file, "codehelp");

        const fileData = await File.create({
            name, tags, email, imageUrl:response.url
        })

        res.status(200).json({
            success:true,
            msg:"image file uploaded successfully",
        })
    }catch(error){
        console.log(error);
        res.status(400).json({
            msg: "someting went wrong"
        })
    }
}


exports.videoUpload = async(req, res) => {
    try{
        const {name, tags, email} = req.body;
        const file = req.files.videoUrl
        const supportedType = ["mp4", "3gp"];
        const fileType = file.name.split('.')[1].toLowerCase();
        console.log("file type", fileType)

        if(!fileTypeSupported(fileType, supportedType)){
            return res.status(400).json({
                success:false,
                msg:"file format not supported"
            })
        }

        const response = await uploadFileToCloudinary(file, "codehelp");

        console.log("response", response)

        const fileData = await File.create({
            name, tags, email, imageUrl:response.secure_url
        })

        res.status(200).json({
            success:true,
            msg:"video file uploaded successfully",
        })

    }catch(error){
        console.log(error)
        res.status(400).json({
            success:false,
            msg:"video file not uploaded",
            
        })
    }
}


exports.imageSizeReducer = async (req, res) => {
    try{
        const {name, tags, email} = req.body;
        const file = req.files.imageFile;
        const supportedType = ["jpg", "jpeg", "png"];
        const fileType = file.name.split('.')[1].toLowerCase();

        if(!fileTypeSupported(fileType, supportedType)){
            return res.status(400).json({
                success:false,
                msg:"file format not supported"
            })
        }

        const response = await uploadFileToCloudinary(file, "codehelp", 10);

        const fileData = await File.create({
            name, tags, email, imageUrl:response.url
        })

        res.status(200).json({
            success:true,
            msg:"image file uploaded successfully",
        })
    }catch(error){
        console.log(error);
        res.status(400).json({
            msg: "someting went wrong"
        })
    }
}