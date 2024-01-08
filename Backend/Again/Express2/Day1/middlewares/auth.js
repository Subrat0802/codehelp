const jwt = require("jsonwebtoken");
require('dotenv').config();

// Middleware for authenticating user with JWT token
exports.auth = (req, res, next) => {
    try {
        // Extract JWT token from various sources
        console.log("cookies", req.cookies.token);
        console.log("body", req.body.token);

        const token = req.body.token || req.cookies.token || req.header("Authorization")?.replace("Bearer ", "");
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token Missing",
            });
        }

        // Verify the token
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);
            req.user = decode;  // Attach decoded user information to request body

        } catch (error) {
            return res.status(401).json({
                success: false,
                message: "Token is Invalid"
            });
        }

        next();  // Move to the next middleware or route handler
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Something went wrong while verifying the token"
        });
    }
};

// Middleware to check if the user is a student
exports.isStudent = (req, res, next) => {
    try {
        if (req.user.role !== "Student") {
            return res.status(401).json({
                success: false,
                message: "This is a protected route for students"
            });
        }

        // Success, move to the next middleware or route handler
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User role does not match"
        });
    }
};

// Middleware to check if the user is an admin
exports.isAdmin = (req, res, next) => {
    try {
        if (req.user.role !== "Admin") {
            return res.status(401).json({
                success: false,
                message: "This is a protected route for Admin"
            });
        }

        // Success, move to the next middleware or route handler
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User role does not match"
        });
    }
};
