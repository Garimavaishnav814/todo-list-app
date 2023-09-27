const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const { Schema } = mongoose;
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: [3, "name should be more then 3 charecters length"],
        maxLength: [20, "name length can't exied more then 20 charecters"]
    },
    email: {
        type: String,
        required: [true, "please email should be enter"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "please enter your password"],
        minLength: [8, "password atlest 8 charecters"]
    }
});

UserSchema.methods.getJWTToken = function () {
    console.log("inside this code")
    return jwt.sign({ id: this._id }, "hasdgjhgsahdv", {
        expiresIn: "2d"
    });
    //   console.log(myToken,"my token")
}
const User = mongoose.model("User", UserSchema);

module.exports = User;