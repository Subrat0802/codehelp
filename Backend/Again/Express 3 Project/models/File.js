const mongoose = require("mongoose");
require("dotenv").config();
const nodemailer = require("nodemailer");

const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  tags: {
    type: String,
  },
  email: {
    type: String,
  },
});

//post middleware
fileSchema.post("save", async function (doc) {
  try {
    console.log("doc", doc);
    // transporter
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    let info = await transporter.sendMail({
      from: `Subrat & co.`,
      to: doc.email,
      subject: "New file uploaded on cloudinary",
      html: `<h1>Hello ${doc.name} Your file is uploaded in cloudinary</h1> <br /> View Here:<p> <a href=${doc.imageUrl} >${doc.imageUrl}</p> </a> <img src="${doc.imageUrl}"/>`,
    });

    console.log("Info", info);
  } catch (error) {
    console.log(error);
  }
});

const File = mongoose.model("File", fileSchema);
module.exports = File;
