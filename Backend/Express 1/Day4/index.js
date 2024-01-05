const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());

// Routes
const blogRoutes = require("./routes/blog");
// Mount the routes
app.use("/api/a2", blogRoutes);

// Database connection
const connectWithDb = require("./config/dataBase");
connectWithDb();  

// Start the server
app.listen(PORT, () => {
    console.log(`App is started at port no ${PORT}`);
});

// Default route
app.get("/", (req, res) => {
    res.send("<h1>This is my home page</h1>");
});
