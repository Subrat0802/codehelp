const mongoose = require("mongoose");
require("dotenv").config();

exports.dbconnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(() => {
        console.log("DB connected successfully")
    }).catch((error) =>{
        console.log("db not connected")
        process.exit(1);
    })
}