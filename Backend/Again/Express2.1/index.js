const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

require("./config/database").connect();

const userMiddleware = require("./routes/user"); // Assuming user.js exports middleware

app.use("/api/v1", userMiddleware);

app.listen(PORT, () => {
    console.log(`App is listening on port number ${PORT}`);
});


// const express = require("express");
// const app = express();

// require("dotenv").config();
// const PORT = process.env.PORT || 4000;

// app.use(express.json());

// require("./config/database").connect();

// // Import the user router
// const userRouter = require("./routes/user");

// // Use the user router with the specified path
// app.use("/api/v1/user", userRouter);

// app.listen(PORT, () => {
//     console.log(`App is listening on port number ${PORT}`);
// });
