const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  userId:{
    type:mongoose.Schema.ObjectId,
    ref:"User",
    required:[true,"please enter your Id"]
  },
  task: {
    type: String,
    required: [true,"please enter your day task"]
  },
  createdAt:{
    type:Date,
    default:Date.now,
  }
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;