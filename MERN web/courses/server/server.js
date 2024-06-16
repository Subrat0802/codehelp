const express = require("express");
const app = express();
const cors = require("cors");
const errorMiddleware = require("./middlewares/error.middleware");

require("dotenv").config();
const PORT = process.env.PORT || 4000

const corsOption = {
    origin: "http://localhost:5173/",
    method:"POST, GET, PUT, DELETE, PATCH, HEAD",
    credentials: true,
}

app.use(cors(corsOption))

const {dbconnect} = require("./utils/db");
dbconnect();

app.use(express.json());

const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRouter = require("./router/service-router");
const adminRouter = require("./router/admin-router");

app.use("/api/v1", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/s1", serviceRouter);
app.use("/api/admin", adminRouter);

app.use(errorMiddleware)

app.listen(PORT, () => {
    console.log(`app is running at port ${PORT}`);
})

