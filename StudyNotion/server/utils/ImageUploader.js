const cloudinary = require("cloudinary").v2;


exports.uploadImageToCloudinary = async(file, folder, height, quailty) => {
    const options = {folder};
    if(height){
        options.height = height;
    }
    if(quailty){
        options.quailty = quailty;
    }
    options.resource_type = "auto";

    return await cloudinary.uploader.upload(file.tempFilePath, options);
} 