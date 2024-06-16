const express = require("express");
const dbconnect = require("./config/dbconnect");
const router = require("./routers/todo-router");
require("dotenv").config();

const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.json());

dbconnect.dbconnect();
app.use("/api/v1", router);

app.listen(PORT, () => {
    console.log(`server started at posrt ${PORT}`)
})