const mongoose = require("mongoose");
const nodemailer = require("nodemailer")
require("dotenv").config();

const fileSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    tags:{
        type:String,
    },
    email:{
        type:String
    }
})


fileSchema.post("save", async function(doc){
    try{
        console.log("dioc",doc);
        let transporter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS
            }
        })
        let info = await transporter.sendMail({
            from:`Codehelp by subrat`,
            to:doc.email,
            subject:`Your file is stored in cloudinary`,
            html: `<h1>Thankyou${" " + doc.name}</h1><br/><p>your file ${" " + doc.imageUrl + " "} Successfully stored in cloudinary</p>`
        })
        console.log("info", info);
    }catch(error){
        console.log(error);
    }
})


const File = mongoose.model("FIle", fileSchema);
module.exports = File;