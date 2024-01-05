const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const fileSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String
    },
    tags:{
        type:String,
    },
    email:{
        type:String
    }
});


//post middleware POST
fileSchema.post("save", async function(doc){
    try{
        console.log("DIC", doc);

        //transporter
        let transporter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS
            },
        })

        //send mail
        let info = await transporter.sendMail({
            from:`codeHelp -by subrat`,
            to: doc.email,
            subject: "New file uplaoded on cloudinary",
            html:`<h1>Hello jee</h1> <p>File uploaded ${doc.imageUrl}</p>`
        })
        console.log("INFO",info)
    }
    catch(error){
        console.log(error);
        
    }   
})

const File = mongoose.model("File", fileSchema);
module.exports = File;