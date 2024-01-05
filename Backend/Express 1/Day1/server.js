//step 1: create a folder
//step 2: move into that folder
//step 3: npm init -y
//step 4: open folder using BSCODE
//step 5: npm i express
//step 6: create server.js

//server instantiate
const express = require("express");
const app = express();

//used tp parse req.body in express = > put or post
const bodyParser = require("body-parser");
//specifically parse JSON data & add it to the req body
app.use(bodyParser.json());

//create server active server
app.listen(3000, () => {
  console.log("Srver started at port number 3000");
});

//Routes
app.get("/", (req, res) => {
  res.send("Hello jee server is created");
});

app.post("/api/cars", (req, res) => {
  const { name, brand } = req.body;
  console.log(name);
  console.log(brand);
  res.send("car submitted successfully");
});

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/myDatabase", {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection successful");
  })
  .catch((error) => {
    console.log("Recieved an error");
  });
