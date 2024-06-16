const jwt = require("jsonwebtoken");
const User = require("../models/user-model");
require("dotenv").config();

const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.header('Authorization');

        // Check if the Authorization header is present and starts with 'Bearer '
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: "Unauthorized, token not provided" });
        }

        // Use split to correctly extract the token part
        const jwtToken = authHeader.split(' ')[1];  // CHANGE: Extracting token using split
        if (!jwtToken) {
            return res.status(401).json({ message: "Unauthorized, token not provided" });
        }

        // console.log(jwtToken);

        // Verify the JWT token
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
        const userData = await User.findOne({ email: isVerified.email }).select("-password");

        // Check if user data is found
        if (!userData) {
            return res.status(404).json({ message: "User not found" });
        }

        // Set user data and token on the request object
        req.user = userData;
        req.token = jwtToken;
        req.userId = userData._id;

        next();
    } catch (error) {
        // Check if the error is a JsonWebTokenError and respond accordingly
        if (error instanceof jwt.JsonWebTokenError) {  // CHANGE: Specific handling for JsonWebTokenError
            console.error("Unauthorized, invalid token:", error);
            return res.status(401).json({ message: "Unauthorized, invalid token" });
        }
        // Log and respond with a 500 status for other errors
        console.error("Internal server error:", error);  // CHANGE: General error handling
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = authMiddleware;
