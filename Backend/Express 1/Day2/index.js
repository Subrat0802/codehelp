
const express = require('express')
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// /middilware to parse json request body
app.use(express.json());

//imoprt routes for todo API
const todoRoutes = require("./routes/todos");

//mount the todo aspi routes
app.use("/api/a1", todoRoutes)

//server start
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})

//connect to the db
const dbConnect = require("./config/database")
dbConnect()

//default route
app.get("/", (req, res) => {
    res.send(`<h1>This is home page babay</h1>`)
})