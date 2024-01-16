const Todo = require("../models/Todo");

//define route handler
exports.deleteTodo = async(req, res) => {
    try{
        const {id} = req.params;
        await Todo.findByIdAndDelete(id);

        res.status(200).json({
            success:true,
            message:"todo deleted successfully"
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