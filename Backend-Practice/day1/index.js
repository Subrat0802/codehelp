const express = require("express");
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Serverstarted at posrt number 3000");
})

app.get("/", (req, res) => {
    res.send("Hello jee kese ho saare");
})

app.post("/api/v1", (req, res) => {
    const {name, brand} = req.body;
    console.log(name, brand);
    res.send("Car submitted successfully");
})


const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/subratDatabase", {
    useNewUrlParser : true,
    useUnifiedTopology: true,
})
.then(() => {console.log("Connection successfull")})
.catch((error) => {console.log("Received an error")});
