const Todo = require("../models/Todo");

//define route handler
exports.createTodo = async(req, res) => {
    try{
        const {title, description} = req.body;
        //craete a new todo
        const response = await Todo.create({title, description});

        res.status(200).json({
            success:true,
            data:response,
            message:"Entery created successfully"
        })
    }
    catch(error){
        console.log(error);
        console.log(error.message);
        res.status(500).json({
            success:false,
            data:"Internal issue",
            message:error.message
        })
    }
}