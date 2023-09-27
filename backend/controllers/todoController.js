const Todo=require("../model/todoModels");

// post====>
exports.todoCreate=(async (req, res) => {
  try {
    console.log(req.body)
    const taskData={
      userId:req.user,
      task:req.body.task
    }
    const saveTodoData = await Todo.create(taskData)
    console.log("save todo", saveTodoData)
    res.send(saveTodoData);
  } catch (error) {
    console.log(error)
    res.send(error)
  }
});

// get============>
exports.todoFind=(async (req, res) => {
  console.log(req.user)
  try {
    const allTask = await Todo.find({userId:req.user})
    res.send(allTask);
  } catch (error) {
    res.send(error)
    console.log(error)
  }

});


// get=======>
exports.todoData=(async(req,res) => {
  try {
    console.log(req.query)
    const singleTask= await Todo.find({task:req.query.task})
    res.send(singleTask);
  } catch (error) {
    res.send(error)
    console.log(error)
  }

});


// put================>
exports.todoUpdateById=(async (req, res) => {
  try {
    const update = await Todo.findByIdAndUpdate(req.params.id, req.body)
    res.send({ result: "updated successfully" })
  } catch (error) {
    res.send(error)
    console.log(error)
  }

})


// delete=========>
exports.todoDelete=(async (req, res) => {
  try {
    const deleteTask = await Todo.findByIdAndDelete(req.params.id)
    res.send({ deleteTask })
    console.log("delete task")
  } catch (error) {
    res.send(error)
    console.log(error)
  }

})