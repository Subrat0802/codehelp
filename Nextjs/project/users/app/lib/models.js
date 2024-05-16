import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        max: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,  
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: false
    },
    phone: {
        type: String,
    },
    address: {
        type: String
    }
}, { timestamps: true });


const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    stock:{
        type:Number,
        required:true,
        min:0
    },
    img:{
        type:String,

    },
    color:{
        type:String
    },
    size:{
        type:String,
    }
},{timestamps:true})



export const Users = mongoose.models.Users || mongoose.model("Users", userSchema)
export const Products = mongoose.models.Products || mongoose.model("Products", productSchema)

