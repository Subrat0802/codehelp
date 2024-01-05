//import the model
const Todo = require("../models/Todo");


//define route handler //main tread block na ho isi liye async function ka use kiya hai // data base iteraction saari ki saari asyn function mai jaye
exports.createTodo = async (req, res) => {
    try{
        //extract title and description from req ki body
        const {title, description} = req.body;
        //create a new todo obj and insert to db
        const response = await Todo.create({title, description});
        //send json flag with success flag
        res.status(200).json({
            success:true,
            data:response,
            message:"Entery Created Successfully"
        })

    }
    catch(error){
        console.log(error);
        console.error(error);
        res.status(500).json({
            success:false,
            message:error.message,
            data:"Internal server error"
        })
    }
};
