const Todo = require("../models/Todo");

//define route handler
exports.getTodo = async (req, res) => {
  try {
    const todos = await Todo.find({});

    res.status(200).json({
      success: true,
      data: todos,
      message: "Entire data is fetched",
    });
  } catch (error) {
    console.log(error);
    console.log(error.message);
    res.status(500).json({
      success: false,
      data: "Internal issue",
      message: error.message,
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });

    //error
    if (!todo) {
      res.status(404).json({
        success: false,
        message: "No data found",
      });
    }
    res.status(200).json({
      success: true,
      data: todo,
      message: `Todo ${id} data successfully fetched`,
    });
  } catch (error) {
    console.log(error);
    console.log(error.message);
    res.status(500).json({
      success: false,
      data: "Internal issue",
      message: error.message,
    });
  }
};
