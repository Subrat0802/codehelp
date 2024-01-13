const cloudinary = require("cloudinary").v2

//ye server mai upload karke clodinary mai upload karta hai temp file banata hai delete kar deat hai
exports.cloudinaryConncet = () => {
    try{
        cloudinary.config({
            cloud_name:process.env.CLOUD_NAME,
            api_key:process.env.API_KEY,
            api_secret:process.env.API_SECRET,
        })
    }
    catch(error){
        console.log(error)
    }
}