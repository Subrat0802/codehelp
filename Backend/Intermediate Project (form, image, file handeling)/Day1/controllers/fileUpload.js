const File = require("../models/File");
const cloudinary = require("cloudinary").v2;

//localfileUpload => handler function

exports.localFileUpload = async (req, res) => {
  try {
    //fetch filefrom request
    const file = req.files.file;
    console.log("File aagyi ", file);

    //create path where file need to be stored on server
    let path =
      __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`;
    console.log("PATH-> ", path);

    //add path to the move function
    file.mv(path, (err) => {
      console.log(err);
    });

    //create a successful response
    res.json({
      success: true,
      message: "Local file uploaded successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

function isFileTypeSupported(type, supportedType) {
  return supportedType.includes(type);
}

async function uploadFileToCloudinary(file, folder, quality) {
  const options = { folder };
  options.resource_type = "auto";

  if(quality){
    options.quality = quality;
  }
  return await cloudinary.uploader.upload(file.tempFilePath);
}

//image upload ka handler
exports.imageUpload = async (req, res) => {
  try {
    //data fetch
    const { name, tags, email } = req.body;
    console.log(name, tags, email);

    const file = req.files.imageFile;
    console.log(file);

    //validation
    const supportedType = ["jpg", "jpeg", "png"];
    const fileType = file.name.split(".")[1].toLowerCase();

    if (!isFileTypeSupported(fileType, supportedType)) {
      return res.status(400).json({
        success: false,
        message: "File format not supported",
      });
    }

    //file format support hai
    const response = await uploadFileToCloudinary(file, "/codehelp");
    console.log(response);

    //db mai entery save karni hai
    const fileData = await File.create({
      name,
      tags,
      email,
      imageUrl: response.secure_url,
    });

    res.json({
      success: true,
      imageUrl: response.secure_url,
      message: "image successfully uploaded",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

//video handler

exports.videoUpload = async (req, res) => {
  try {
    //data fetch
    const { name, tags, email } = req.body;
    console.log(name, tags, email);

    const file = req.files.videoFile;

    //validation
    const supportedType = ["mp4", "mov"];
    const fileType = file.name.split(".")[1].toLowerCase();

    //add upper limit of 5mb
    if (!isFileTypeSupported(fileType, supportedType)) {
      return res.status(400).json({
        success: false,
        message: "File format not supported",
      });
    }

    //file format support hai
    const response = await uploadFileToCloudinary(file, "Codehelp");
    console.log(response);

    //db mai entery save karni hai
    const fileData = await File.create({
      name,
      tags,
      email,
      videoUrl: response.secure_url,
    });

    res.json({
      success: true,
      videoUrl: response.secure_url,
      message: "video successfully uploaded",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

exports.imageSizeReducer = async (req, res) => {
  try {
    //data fetch
    const { name, tags, email } = req.body;
    console.log(name, tags, email);

    const file = req.files.imageFile;
    console.log(file);

    //validation
    const supportedType = ["jpg", "jpeg", "png"];
    const fileType = file.name.split(".")[1].toLowerCase();

    if (!isFileTypeSupported(fileType, supportedType)) {
      return res.status(400).json({
        success: false,
        message: "File format not supported",
      });
    }

    //file format support hai
    const response = await uploadFileToCloudinary(file, "codehelp", 90);
    console.log(response);

    //db mai entery save karni hai
    const fileData = await File.create({
      name,
      tags,
      email,
      imageUrl: response.secure_url,
    });

    res.json({
      success: true,
      imageUrl: response.secure_url,
      message: "image successfully uploaded",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
};


