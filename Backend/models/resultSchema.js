const mongoose = require('mongoose');
const Schema=mongoose.Schema


const quizResultSchema = new Schema({
  
    studentId: {type:Schema.Types.ObjectId,
      ref:"user"},
      quizId: {type:Schema.Types.ObjectId,
        ref:"quiz"},

    marks: Number,
    resultOut:{type:Boolean,default:false},

    hasAttempted:{type:Boolean,default:false},

    rank:Number,
    timeTaken: Number
  });

const quizResult=mongoose.model("quizResult",quizResultSchema)

module.exports=quizResult


//create a view all quiz page for user
//create a upload result fun for teacher
//create a page to show result of a paerticular test
//create a page where teacher can see students given test