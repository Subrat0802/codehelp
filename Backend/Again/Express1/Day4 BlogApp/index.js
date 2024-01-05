const express = require("express");
const app = express();


require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const blog = require("./routers/blog");
//mount 
app.use("/api/v2", blog)

const connectWithDb = require("./config/database")
connectWithDb();

//start a server
app.listen(PORT, () => {
    console.log(`App is running in port number ${PORT}`);
})


app.get("/", (req, res) => {
    res.send(`<h1>App is running</h1>`)
})