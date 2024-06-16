const User = require("../models/user-model");
const bcrypt = require("bcrypt")

const home = async (req, res) => {
    try{
        res.status(200).send("app started - using router")
    }catch(error){
        console.log(error);
    }
}

const register = async (req, res) => {
    try{
        const {username, email, password, phone} = req.body;

        const userExist = await User.findOne({email})

        if(userExist){
            return res.status(400).json({message:"User already exist"})
        }

        //hash the password
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound);

        
        const resposnse = await User.create({username, email, password, phone})

        res.status(201).json({
            msg:"User created successfully",
            data:resposnse,
            token: await resposnse.generateToken(), 
            userId: resposnse._id.toString(),
        })
        
    }catch(error){
        next(error)
    }
}


//user login logic
const login = async(req, res) => {
    try{
        const {email, password} = req.body;
        const userExist = await User.findOne({email});
        if(!userExist){
            return res.status(400).json({
                msg:"Invalid credential user not exist"
            })
        }
        // const user = await bcrypt.compare(password, userExist.password)
        const user = await userExist.comparePassword(password)

        if(user){
            res.status(200).json({
                msg:"login successful",
                token: await userExist.generateToken(), 
                userId: userExist._id.toString(),
            })
        }
        else{
            res.status(401).json({
                message:"Invalid email or password"
            })
        }


    }catch(error){
        console.log(error);
        // next(error)
    }
}



//get user data
const user = async (req, res) => {
    try {
        const userData = req.user;
        if (!userData) {
            return res.status(404).json({ error: "User data not found" });
        }
        console.log(userData);
        res.status(200).json({ userData });
    } catch (error) {
        console.error("Error from the user route:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};







module.exports = {home, register, login, user}