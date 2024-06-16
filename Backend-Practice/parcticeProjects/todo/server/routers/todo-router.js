const express = require("express");
const { createTodo, updateTodo, deleteTodo, getAllTodos } = require("../controllers/createTodo");
const router = express.Router();

router.post("/createTodo", createTodo)
router.put("/updatetodo/:id", updateTodo)
router.delete("/deleteTodo/:id", deleteTodo)
router.get("/getAllTodos", getAllTodos)

module.exports = router