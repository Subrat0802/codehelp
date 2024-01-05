const express = require('express');
//express intantiation
const app = express();

//used to parse req.body in express => put or post
const bodyParser = require('body-parser')
//specifically parse JSON data & add it to the req.Body object
app.use(bodyParser.json());


app.listen(3000, () => {
    console.log("Server started at port number 3000");
});


//create route
app.get("/", (req, res) => {
    res.send("Hello jee kese ho saaare");
})

app.post("/api/cars", (req, res) => {
    const {name, brand} = req.body;
    console.log(name);
    console.log(brand);
    res.send("Car subitted successfuly");
})


const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/subratDatabaseAgain", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(() => {console.log("Connection successful")})
.catch( () => {console.log("Received an error")})