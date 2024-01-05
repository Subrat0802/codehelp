//server instentiate
const express = require("express");
const app = express();


//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());


//import routes for Todo API
const todoRoutes = require("./routers/todos");
//mount the todo ASPI routes
app.use("/api/v1", todoRoutes);

//start the server
app.listen(PORT, () => {
    console.log("server started at port number 4000")
})


//connect with db
const dbConnect = require("./config/database");
dbConnect();



app.get("/", (req, res) => {
    res.send("DB connection is stablished")
})