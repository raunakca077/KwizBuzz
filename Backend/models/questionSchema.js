const mongoose = require('mongoose');
const Schema=mongoose.Schema


const questionSchema=new Schema({
    question: {type:String,required:true},
    options: [String],
    correctAnswer: String,
    difficultyLevel: String, // "Easy", "Medium", or "Hard"
    category: String,
    tags: [String],
    timeLimit: Number,

    scoring: {
        pointsPerQuestion: Number,
        penaltyPerIncorrectAnswer: Number
      },

});

const quizQuestion=mongoose.model("quizQuestion",questionSchema)

module.exports=quizQuestion