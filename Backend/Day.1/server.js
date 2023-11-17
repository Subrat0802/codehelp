// step 1 create a folder
//step 2 move into yhe folder
//step 3 npm init -y
//step 4 open folder using vs code
// step 5 npm i express
// step6 create server.js


//server Instantiate
const express = require("express");
const app = express();

//PUT or POST
const bodyParser = require('body-parser');

//specifivalyt parse JSON data & add it to the request. body object 
app.use(bodyParser.json());

//activate the server on port 3000
app.listen(3000, () => {
  console.log("server started at port number 3000");
});


//Routes
app.get("/", (req, res) => {
  res.send("Hello jee jaiso ho saare");
});

app.post('/api/cars', (req, res) => {
    const {name, brand} = req.body;
    console.log(name);
    console.log(brand);
    res.send("Car submitted successfully");
})

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/myDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true, 
})
.then(()=>{console.log("Connection Successfull")})
.catch((error) => {console.log("Recevied an error")})