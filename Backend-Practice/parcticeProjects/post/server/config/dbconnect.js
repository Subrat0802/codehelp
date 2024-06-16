const mongoose = require("mongoose");

require("dotenv").config();

exports.dbconnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,   
    }).then(() => {
        console.log("DB connected")
    }).catch((erorr) => {
        console.log(error.message);
        process.exit(1)
    })
}