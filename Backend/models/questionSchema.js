const mongoose = require('mongoose');
const Schema=mongoose.Schema


const questionSchema=new Schema({
    question: {type:String,required:true},
   
  options:{
      type  :Array,
      default:[]
  },
  answerOption: {
    type: Number,
    required: true,
    select:false
},
    
        positiveScore: {type:Number,default:1},
        negativeScore: {type:Number,default:-1}


});

const quizQuestion=mongoose.model("quizQuestion",questionSchema)

module.exports=quizQuestion