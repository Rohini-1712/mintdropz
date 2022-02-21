const mongoose = require("mongoose");
const validator = require('validator');
const demoSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true, "Email is already present...."],
        validate(value){
            if(!validator.isEmail(value)){
              throw new Error("Invalid email");
            }
        }
    },
    password:{
        type:String,
        required:true
    }
    // img:
    // {
    //     type: String,
    //     required: true
    // }
})

const POST = new mongoose.model("post", demoSchema);
module.exports = POST ;