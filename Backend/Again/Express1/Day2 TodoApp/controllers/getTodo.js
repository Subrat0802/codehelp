//import the model
const Todo = require("../models/Todo");

//define route handler //main tread block na ho isi liye async function ka use kiya hai // data base iteraction saari ki saari asyn function mai jaye
exports.getTodo = async (req, res) => {
  try {
    //fetch all todo item from db
    const todos = await Todo.find({});

    //response
    res.status(200).json({
      success: true,
      data: todos,
      message: "Entire Todo Data is fetched",
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
//postman mai none kiya hai all data fetch karne ke liye DB se

exports.getTodoById = async (req, res) => {
  try {
    //extract todo items basis in id
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });

    //data for given id is not found
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No Data found with given id",
      });
    }

    //data for given id Found
    res.status(200).json({
      success: true,
      data: todo,
      message: `todo ${id} data successfully fatched`,
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
