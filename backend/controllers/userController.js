const User = require("../model/signUpModels");
const sendToken = require("../utils/jwtToken");
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")
const salt=bcrypt.genSaltSync(10)


// sign-Up API======================>


exports.userSignup=( async (req, res) => {
    try {
      req.body.password=bcrypt.hashSync(req.body.password, salt)
      console.log(req.body)
      const newUser = await User.create(req.body)
      // const result= await newUser.save();
      console.log(newUser, "signup")
      res.send({ newUser })
    } catch (error) {
      res.send(error)
    }
  })
  
  // login API ==============================>
  
exports.userLogin=(async (req, res) => {
    try {
      if (req.body.password && req.body.email) {
        console.log(req.body)
        const userData = await User.findOne({email:req.body.email})
        if (userData) {
          const comparePassword=bcrypt.compareSync(req.body.password, userData.password); // true
          if(comparePassword) sendToken(userData,200,res);
          else res.send({error:"invalid credintion"})
          // console.log(userData._id, "login")
          // // const token=jwt.sign({ id: userData._id }, process.env.JWT_SECRET, {
          // //   expiresIn: process.env.JWT_EXPIRE,
          // // });
          // sendToken(userData,200,res)
          // // console.log(token)
          // // res.send(token,userData)
        } else {
          res.send({ result: "no user found" })
        }
      } else {
        res.send({ result: "please enter your correct i'd and password" })
      }
    } catch (error) {
      res.send(error)
    }
  })