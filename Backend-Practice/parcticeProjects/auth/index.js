const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000

app.use(express.json());

const dbconnect = require("./config/database");
dbconnect.dbconnect()

const postrouter = require("./routers/postroute");
app.use("/api/v1", postrouter);

app.listen(PORT, () => {
    console.log(`app is listening on ${PORT}`);
})