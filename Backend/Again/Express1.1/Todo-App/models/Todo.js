const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String, // Corrected 'Type' to 'type'
    required: true,
    maxLength: 50,
  },
  description: {
    type: String, // Corrected 'Type' to 'type'
    required: true,
    maxLength: 50,
  },
  createdAt: {
    type: Date, // Corrected 'Type' to 'type'
    required: true,
    default: Date.now(),
  },
  updatedAt: {
    type: Date, // Corrected 'Type' to 'type'
    required: true,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Todo", todoSchema);
