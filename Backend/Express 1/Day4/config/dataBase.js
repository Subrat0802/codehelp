// const mongoose = require("mongoose");

// require("dotenv").config();
// const connectWithDb = () => {
//     mongoose.connect(process.env.DATABASE_URL, {
//         useNewUrlParser:true,
//         useUnifiedTopology:true,
//     })
//     .then(console.log("DB is connected"))
//     .catch((err) => {
//         console.log("DB facing connection isuues");
//         console.log(err);
//         process.exit(1);
//     })
// };

// module.exports = connectWithDb;

const mongoose = require("mongoose");
require("dotenv").config();

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB is connected");
    })
    .catch((err) => {
        console.error("DB facing connection issues");
        console.error(err);
        process.exit(1);
    });
};

module.exports = connectWithDb;
