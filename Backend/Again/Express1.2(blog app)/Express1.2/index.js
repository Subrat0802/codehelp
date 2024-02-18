const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const blog = require("./routers/blog");
//mount
app.use("/api/v1", blog)

const connectDb = require("./config/database");
connectDb()

app.listen(PORT, () => {
    console.log(`app is running in ${PORT}`);
})

app.get("/", (req, res) => {
    res.send("This is blog app")
})