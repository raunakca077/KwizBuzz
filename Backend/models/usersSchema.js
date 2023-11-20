const mongoose = require('mongoose');
const Schema=mongoose.Schema


const userSchema = new Schema({
    username: {type:String,required:true},
  email: {type:String,required:true,unique:true},
  password: {type:String,required:true,select:false},
  role: String, // "student" or "admin"
  createdAt:{type:Date,default:Date.now()}
  });

const user=mongoose.model("user",userSchema)

module.exports=user