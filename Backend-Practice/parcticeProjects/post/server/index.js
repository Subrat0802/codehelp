const express = require("express");
const app = express();


require('dotenv').config();
const PORT = process.env.PORT || 3000


app.use(express.json())

const blogRouter = require("./router/postRouter");
app.use("/api/v1", blogRouter)

const dbconnect = require("./config/dbconnect");
dbconnect.dbconnect();

app.listen(PORT, () => {
    console.log(`app started at post number ${PORT}`)
})