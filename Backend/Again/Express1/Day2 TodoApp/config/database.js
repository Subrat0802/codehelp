const mongoose = require("mongoose");


//iski wajah se aapne jo bhi env file ke anadar define kiya hoga wo process ho jayega process.env Object ke anadar ki wajah se
require("dotenv").config()


const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(() => console.log("DB ka connection is stablished"))
    .catch((error) => {
        console.log("Isseu in db connection");
        console.error(error);
        process.exit(1);
    })
}

module.exports = dbConnect;