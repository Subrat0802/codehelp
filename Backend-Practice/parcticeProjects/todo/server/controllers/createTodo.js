const Todo = require("../models/todo-model");

exports.createTodo = async (req, res) => {
    try{
        const {title, description} = req.body;
        
        if(!title || !description){
            return res.status(404).json({
                message:"Required all fields"
            })
        }
        const response = await Todo.create({title, description});
        return res.status(200).json({
            message:"Todo created",
            data:response
        })
    }catch(error){
        return res.status(501).json({
            message:"Error while creating todo",
        })
    }
}

exports.updateTodo = async (req, res) =>{
    try{
        const {id} = req.params;
        const {title, description} = req.body;
        if(!id){
            return res.status(404).json({
                message:"Required id"
            })
        }
        const response = await Todo.findByIdAndUpdate(id, {title, description, updatedAt:Date.now()}, {new:true})
        
        return res.status(201).json({
            message:"todo is updated",
            data:response
        })
    }catch(error){
        return res.status(500).json({
            message:"erorr while updating todo"
        })
    }
}

exports.deleteTodo = async (req, res) => {
    try{
        const {id} = req.params;
        if(!id) {
            return res.status(404).json({
                message:"id is not present"
            })
        }
        const response = await Todo.findByIdAndDelete(id);
        return res.status(201).json({
            message:"todo deleted successfully",
            data:response
        })
    }catch(error){
        return res.status(500).json({
            message:"Error while deleting todo"
        })
    }
}


exports.getAllTodos = async (req, res) => {
    try{
        const response = await Todo.find();
        return res.status(200).json({
            msg:"All todos",
            data:response
        })
    }catch(error){
        return res.status(500).json({
            message:"error while getting all the todos"
        })
    }
}