const User = require("../models/User");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.signup = async(req, res) => {
    try{
        const {name, email, password, role} = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(404).json({
                msg:"User already exist"
            })
        }
        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password, 10);
        }catch(error){
            return res.status(404).json({
                msg:"Error in hashing password"
            })
        }
        const response = await User.create({name, email, password:hashedPassword, role});
        return res.status(200).json({
            msg:"User created successfully",
            data:response
        })
        
    }catch(error){
        return res.json(500).json({
            msg:"error while creating user"
        })
    }
}


exports.login = async(req, res) => {
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                success:false, 
                msg:"Please fill all fields"
            })
        }
        let user = await User.findOne({email}).lean();
        if(!user){
            return res.status(404).json({
                msg:"user is not exist, please signup first "
            })
        }

        const payload = {
            email:user.email,
            is:user._id,
            role:user.role
        }

        //varify [password]
        if(await bcrypt.compare(password, user.password)){
            let token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn:"2h"});
            user.token = token
            user.password = undefined;
            const options = {
                expiresIn:"23h",
                httpOnly:true
            }
            res.cookie("subrattoken", token, options).status(200).json({
                success:true,
                msg:"User loggedin successfully",
                user
            })
        }else{
            return res.status(403).json({
                msg:"Pasword incorrect"
            })
        }
    }catch(error){
        console.log(error);
        return res.statsu(500).json({
            msg:"error while loggin"
        })
    }
}