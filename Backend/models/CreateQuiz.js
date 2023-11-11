const mongoose = require('mongoose');
const Schema=mongoose.Schema

const quizSchema=new Schema({
   quizId:String,
   quizTitle:String,
   quizDescription :String,
   quizType:String,
   quizWindow:{
    startTime:Date,
    endTime:Date
   },

   timedQuiz: Boolean,
  timedSections: [
    {
      startTime: Number,
      endTime: Number
    }
  ],
  autosaveProgress: Boolean,
  shareable: Boolean,
  presetAnswers: [
    {
      questionId: String,
      correctAnswer: String
    }
  ],
  resultShowcase: String, // "real-time" or "after-finishing"
  resultVisibility: String, // "students" or "admin" or "all"
  scoring: {
    pointsPerQuestion: Number,
    penaltyPerIncorrectAnswer: Number
  },
  leaderboard: {
    enabled: Boolean,
    sortingCriteria: String // "score" or "time"
  },
  createdBy: String,
  createdOn: Date,
  updatedBy: String,
  updatedOn: Date
})

const quiz=mongoose.model("quiz",quizSchema)

module.exports=quiz