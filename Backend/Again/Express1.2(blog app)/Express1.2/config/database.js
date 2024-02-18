const mongoose = require("mongoose");
require("dotenv").config();

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL, { // Fix typo: DATABSE_URL to DATABASE_URL
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB connected successfully");
    })
    .catch((error) => {
        console.error("DB connection issue:", error.message);
        process.exit(1);
    });
}

module.exports = connectWithDb;
