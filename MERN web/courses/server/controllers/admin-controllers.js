const User = require("../models/user-model");
const Contacts = require("../models/contact-model");
const Services = require("../models/service-model");

const getAllUsers = async (req, res, next) => {
    try{
        const users = await User.find({}, {password:0});
        // console.log("getall users", users)
        if(!users || users.length === 0){
            return res.status(404).json({
                message:"No users found"
            })
        }
        return res.status(200).json(users);
    }catch(error){
        next(error)
    }
}

const getAllContacts = async (req, res, next) => {
    try{
        const contacts = await Contacts.find({});
        if(!contacts || contacts.length === 0){
            return res.status(404).json({
                message:"No contacts found"
            })
        }
        res.status(200).json(contacts)
    }catch(error){
        next(error);
    }
} 

const getAllServices = async (req, res, next) => {
    try{
        const services = await Services.find({});
        if(!services || services.length === 0){
            return res.status(404).json({
                message:"No services found"
            })
        }
        res.status(200).json({
            services
        })
    }catch(error){
        next(error);
    }
} 

//signle user logic
const getUserById = async(req, res, next) => {
    try{
        const {id} = req.params;
        const resposne = await User.findOne({_id: id}, {password:0})
        res.status(200).json({
            resposne
        })
    }catch(error){
        next(error);
    }
}

const updateUserById = async(req, res, next) => {
    try{
        const {id} = req.params;
        const updatedUserData = req.body;

        const updatedData = await User.updateOne({_id:id}, {$set: updatedUserData})
        return res.status(200).json({updatedData})
    }catch(error){
        next(error)
    }
}


const removeUser = async(req, res) => {
    try{
        const {id} = req.params;
        const resposne = await User.findByIdAndDelete({_id:id});
        res.status(200).json({
            msg:"user deleted",
            data:resposne
        })
    }catch(error){
        next(error);
    }
}



module.exports = {getAllUsers, getAllContacts, getAllServices, removeUser, getUserById, updateUserById};

