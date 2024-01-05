//import the model
const Todo = require("../models/Todo");

//define route handler //main tread block na ho isi liye async function ka use kiya hai // data base iteraction saari ki saari asyn function mai jaye
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      data: todo,
      message: `Todo sucessfully deleted`,
    });
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
