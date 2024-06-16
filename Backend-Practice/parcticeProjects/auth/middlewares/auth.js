//auth, isStudnet, isAdmin

const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = (req, res, next) => {
    try{
        //extract jwt token;
        const token = req.body.subrattoken;
        if(!token){
            return res.status(404).json({
                msg:"token missing"
            })
        }
        //verify token 
        try{
            const decode = jwt.verify(token,process.env.JWT_SECRET);
            console.log(decode);
    
            req.user = decode
        }catch(error){
            return res.status(400).json({
                msg:"Token is invalid"
            })
        }
        next();
    }catch(error){
        return res.status(500).json({
            msg:"something wrong while verfying"
        })
    }
}

exports.isStudent = (req, res, next) => {
    try{
        if(req.user.role !== "Student"){
            return res.status(401).json({
                success:false,
                msg:"this is protected route for student"
            })
        }
        next();
    }catch(error){
        return res.status(500).json({
            msg:"something wrong while verfying"
        })
    }
}

exports.isAdmin = (req, res, next) => {
    try{
        if(req.user.role !== "Admin"){
            return res.status(401).json({
                success:false,
                msg:"this is protected route for Admin"
            })
        }
        next()
    }catch(error){
        return res.status(500).json({
            msg:"something wrong while verfying"
        })
    }
}