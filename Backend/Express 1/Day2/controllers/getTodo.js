//import model
const Todo = require("../models/Todo");

//define route handler
exports.getTodo = async (req, res) => {
  try {
    //fetch all todo items drom db
    const todos = await Todo.find({});

    //response
    res.status(200).json({
      success: true,
      data: todos,
      message: "Entire todo data is fetched",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      messagae: "Server Error",
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    //extract todo item basis on id
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });

    ////data for given id is not found
    if(!todo){
        return res.status(404).json({
            success:false,
            message:"No data found with given id",
        })
    }
    //data for given id found
    res.status(200).json({
        success:true,
        data:todo,
        message: `Todo ${id} data successfully fetched`

    })
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      messagae: "Server Error",
    });
  }
};
