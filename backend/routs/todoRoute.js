const express=require("express");
const {todoCreate,todoFind,todoData,todoUpdateById,todoDelete}=require("../controllers/todoController");
const { authCheck } = require("../middleware/authCheck");

const router=express.Router();
router.route("/").post(authCheck ,todoCreate).get(authCheck,todoFind);
router.route("/todoData").get(authCheck,todoData);
router.route("/:id").put(authCheck,todoUpdateById).delete(authCheck,todoDelete);

module.exports=router;


