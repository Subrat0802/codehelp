const express = require("express");
const app = express();

app.use(express.json());

require("dotenv").config();

const PORT = process.env.PORT || 4000

const fileUpload = require("express-fileupload");
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

const dbconnect = require("./config/database");
dbconnect.dbconnect();

const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

const upload = require("./routes/fileupload");
app.use("/api/v1", upload);

app.listen(PORT, () => {
    console.log(`app is running on ${PORT}`)
})