import mongoose from "mongoose"
const Schema=mongoose.Schema


const userSchema = new Schema({
    name: {type:String},
  email: {type:String},
  pass: {type:String},
  uid:{type:String}
  });

const playerModel=mongoose.model("playerModel",userSchema)

 export default playerModel