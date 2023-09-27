const mongodb = require('mongodb');
const mongoose = require("mongoose");

const db = async() => {
    try {
        const data= await mongoose.connect('mongodb://localhost:27017/tododb',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    console.log("data coneection", data.connection.host)
    } catch (error) {
        console.log(error)
    } 
}
module.exports = db;