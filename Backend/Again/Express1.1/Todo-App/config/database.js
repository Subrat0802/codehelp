const mongoose = require("mongoose");

require("dotenv").config();
const dbConnect = () => {
  mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB CONNECTION IS SUCCESSFUL"))
  .catch((error) => {
    console.log("DB IS NOT CONNECTED")
    console.error(error.message);
    process.exit(-1);
})
};


module.exports = dbConnect;