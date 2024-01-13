//app create
//db se connect karna hai
//port find karna h
//middleware add karna hai
//cloud se connect karn ahai
//api route mount karna h
//activate server


const express = require("express");

const app = express();

require("dotenv").config()

app.use(express.json());

// ; iss middleware ka use kar ke server par apni file upload karenge
const fileUpload = require("express-fileupload");
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/"
})); //ye server par uplaod karta hai 


//db se connect kiya 
const db = require("./config/database");
db.connect();

//cloudinary se connect kiya
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConncet()


//api route mount karna hai
const Upload = require("./routes/FileUpload");
//mount
app.use("/api/v1/upload", Upload)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`)
})