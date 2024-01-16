const Todo = require("../models/Todo");

//define route handler
exports.updateTodo = async(req, res) => {
    try{
        const {id} = req.params;
        const {title, description} = req.body;

        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title, description, updateAt:Date.now()}
        );

        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo ${id} Updated successfully`,
          });
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