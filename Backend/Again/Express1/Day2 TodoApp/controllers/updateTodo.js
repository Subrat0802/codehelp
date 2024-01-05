//import the model
const Todo = require("../models/Todo");

//define route handler //main tread block na ho isi liye async function ka use kiya hai // data base iteraction saari ki saari asyn function mai jaye
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updateAt: Date.now() }
    )

    res.status(200).json({
        success:true,
        data:todo,
        message:`Todo sucessfully updated`
    })

  } catch (error) {
    console.log(error);
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
      data: "Internal server error",
    });
  }
};
