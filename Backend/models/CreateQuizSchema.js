const mongoose = require('mongoose');
const Schema=mongoose.Schema

const quizSchema=new Schema({
  creatorId:{type:Schema.Types.ObjectId,
    ref:"user"},
   quizTitle:{type:String,required:true},
   quizDescription :String,
   quizType:String,

   quizQuestion:[
    {type:Schema.Types.ObjectId,
    ref:"quizQuestion"
    }
   ],

   quizResult:[
    {type:Schema.Types.ObjectId,
      ref:"quizResult"
    }
   ],

   duration :{
    hours : {
      type : Number,
      default: 0
    },

    minutes : {
      type : Number,
      default: 0
    },

    seconds : {
      type : Number,
      default: 0
    }

  },

  autosaveProgress: Boolean,
  resultShowcase: String, // "real-time" or "after-finishing"
  resultVisibility: String, // "students" or "admin" or "all"
  
  leaderboard: {
    enabled: Boolean,
    sortingCriteria: String // "score" or "time"
  },
  createdBy: String,
  createdOn: Date,
})

const quiz=mongoose.model("quiz",quizSchema)
quizSchema.post('findOneAndDelete',async (data)=>
{
if(data)
{
  await quizQuestion.deleteMany({_id:{$in:data.quizQuestion}})

  await quizResult.deleteMany({_id:{$in:data.quizResult}})
}
}) //For deleting all data that is related to specific quiz that is going to be deleted

module.exports=quiz