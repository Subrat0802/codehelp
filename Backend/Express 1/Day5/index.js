
const express = require("express");
const app = express();
const port = 3000;

//adding middleware
app.use(express.json());

//get request
app.get("/", (req, res) => {
    res.send(`<h1>Hello</h1>`)
})

//post request
app.post("/car", (req, res) => {
    res.send("Received Post Request");
})

app.listen(port, () => {
    console.log("Example app listen at port number 3000")
})

 