const mongoose = require('mongoose');
const Schema=mongoose.Schema


const quizResultSchema = new Schema({
  
    studentId: {type:Schema.Types.ObjectId,
      ref:"user"},

    score: Number,
    rank:Number,
    timeTaken: Number
  });

const quizResult=mongoose.model("quizResult",quizResultSchema)

module.exports=quizResult