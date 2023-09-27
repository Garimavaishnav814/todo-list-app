const express=require("express");
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors());

const user=require("./routs/userRoute")
const todo=require("./routs/todoRoute")
app.use("/api/v1",user)
app.use("/api/v1",todo)
module.exports=app;
