const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.use(express.json());

const dbConnect = require("./config/dbconnect");
dbConnect();

const routes = require("./routes/router");
app.use("/api/v1", routes)

app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`)
})