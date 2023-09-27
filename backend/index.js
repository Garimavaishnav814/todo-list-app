const app=require("./app");
const db=require("./config/db");
db()
const dotenv=require("dotenv")
dotenv.config({path:"./config/config.env"})
// const express = require('express');
// const cors = require('cors')
// const app = express();
// app.use(express.json());
// app.use(cors());
// const mongodb = require('mongodb');
// const mongoose = require("mongoose");
// const Todo = require("./model/todoModels");
// const User = require("./model/signUpModels");
// mongoose.connect('mongodb://localhost:27017/tododb',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   }
// );
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//   console.log("Connected successfully");
// });


// app.post('/', async (req, res) => {
//   console.log(req.body)
//   const saveTodoData = await Todo.create(req.body)
//   console.log("save todo", saveTodoData)
//   res.send(saveTodoData);
// });
// app.get('/', async (req, res) => {
//   const allTask = await Todo.find()
//   res.send(allTask);
// });

// app.get('/todoData', async(req,res) => {
//   console.log(req.query)
//   const singleTask= await Todo.find({task:req.query.task})
//   res.send(singleTask);
// });

// app.put('/:id', async (req, res) => {
//   const update = await Todo.findByIdAndUpdate(req.params.id, req.body)
//   res.send({ result: "updated successfully" })
// })

// app.delete('/:id', async (req, res) => {
//   const deleteTask = await Todo.findByIdAndDelete(req.params.id)
//   res.send({ deleteTask })
// })


// // sign-Up API======================>


// app.post("/signup", async (req, res) => {
//   try {
//     console.log(req.body)
//     const newUser = await User.create(req.body)
//     // const result= await newUser.save();
//     console.log(newUser, "signup")
//     res.send({ newUser })
//   } catch (error) {
//     res.send(error)
//   }
// })

// // login API ==============================>

// app.post("/login", async (req, res) => {
//   try {
//     if (req.body.password && req.body.email) {
//       console.log(req.body)
//       const userData = await User.findOne(req.body).select("-password")
//       if (userData) {
//         console.log(userData, "login")
//         res.send(userData)
//       } else {
//         res.send({ result: "no user found" })
//       }
//     } else {
//       res.send({ result: "please enter your correct i'd and password" })
//     }
//   } catch (error) {
//     res.send(error)
//   }
// })


const server=app.listen(5000, () => {
  console.log("garima vaishnav start")
});

console.log("HI server is runing stage");
