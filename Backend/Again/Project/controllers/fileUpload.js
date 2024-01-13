const FIle = require("../models/File")
const cloudinary = require("cloudinary").v2


//loacel file upload => handler function
exports.localFileUpload  = async (req, res) => {
    try{
        //fecth (yaha hume file fecth karni hai use liye hum req.files.file ka use karte hai)
        //fecth filefrom request
        const file = req.files.file;
        console.log("File Aagyi", file);

        //controllers/files at this path file will upload
        //create path whwrwe file need to be stored on server
        let path = __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`; //server ka path hai, server ke iss path pe file upload hogi
        console.log("Path => " , path)


        //add path to the move function
        file.mv(path, (err) => {  
            console.log(err);
        }) //move 

        //create a successful response
        res.json({
            success:true,
            message:"Local file uploaded successfully"
        })
    }
    catch(error){
        console.log(error);
    }
}


function isFileTypeSupported(fileType, supportedTypes) {
    return supportedTypes.includes(fileType);
}

async function uploadFileToCloudinary(file, folder) {
    const options = { folder };
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

// image upload Handler
exports.imageUpload = async (req, res) => {
    try {
        // data fetch
        const { name, tags, email } = req.body;
        console.log(name, tags, email);

        const file = req.files.imageFile;
        console.log(file);

        // validation
        const supportedTypes = ["jpg", "jpeg", "png"];
        const fileType = file.name.split(".")[1].toLowerCase();
        console.log("File Type:", fileType);

        // check if file type is supported
        if (!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                success: false,
                message: "File type not supported",
            });
        }

        // upload file to Cloudinary
        const response = await uploadFileToCloudinary(file, "codehelp");
        console.log("Cloudinary Response:", response);

        // db mai entry save karni hai
      

        // Perform the database operation to save the image details
        // (Replace the following line with the actual logic to save to your database)
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,
        });

        res.json({
            success: true,
            imageUrl,
            message: "Image successfully uploaded",
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            success: false,
            message: "Something went wrong",
        });
    }
};
