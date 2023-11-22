const quizDb = require("../models/CreateQuizSchema.js")
const userDb = require("../models/usersSchema.js")
const questionDb = require("../models/questionSchema.js")
const resultDb = require("../models/resultSchema.js")
const ExpressError=require("../utils/ExpressError.js") 


module.exports.viewDashboard = async (req, res) => {try {
    
    const quiz = await quizDb.find({ creatorId: req.creator._id })    //.populate("creatorId") for showing full detail of that objectID
    // res.render("createQuizzes/index.ejs",{quiz});
    res.json(
        {
            success: "true",
            quiz
        }
    )
} catch (error) {next(error)
    
}
}

module.exports.showQuiz = async (req, res) => {try {
    
    const { id } = req.params
    const quiz = await quizDb.findById(id)
    res.json(
        { success: "true", Quiz: quiz })
} catch (error) {
    next(error)

}
}


//for deleting quiz



module.exports.joinLink = async (req, res, next) => {
    try {
        
        const { id } = req.params
        const {quizTitle,quizDescription,quizType,quizQuestion} = await quizDb.findById(id).populate("quizQuestion")
        res.json(
            { success: "true",
            quizTitle,
            quizDescription,
            quizType,
            quizQuestion,
         
        })
    } catch (e) { next(e) }
}

module.exports.submitQuiz = async (req, res, next) => {
    try {
        const { id } = req.params
        const hasAttempted = await resultDb.find({studentId:req.user,quizId:id})
        console.log(hasAttempted)
        if(hasAttempted.length>0) return next(new ExpressError("User Already Given The Quiz !!",404))


        
        
        const {quizQuestion} = await quizDb.findById(id).populate("quizQuestion").select("+answerOption")
        const {userAnswers}=req.body
        let score=0
        var i=0
        for(var q of quizQuestion)
        {    
            if(q.answerOption==userAnswers[i++]) score+=q.positiveScore;
            else score+=q.negativeScore;
        }
        const newResult=new resultDb({
            studentId:req.user,
            marks:score,
            quizId:id,
            // timeTaken:
        })
        newResult.save()

        res.json(
            { success: "true",
            message:"quiz Submitted"
        })
    } catch (e) { next(e) }
}


module.exports.allAttempted = async (req, res, next) => {
    try {
        const { id } = req.user
        const quizId=await resultDb.find({studentId:id}).populate("quizId")
        const arr=[]
        for(let x of quizId)
        arr.push(x.quizId)
        res.json(
            { 
                success: "true",
                arr
         
        })
    } catch (e) { next(e) }
}

module.exports.showResult = async (req, res, next) => {
    try {
        const { id } = req.params
        const result=await resultDb.find({studentId:req.user,resultOut:true}).populate("quizId")      //here req.user id got by isAuth filebdue to middleware
        const arr=[]
        console.log(result)
            for(let x of result)
            {
                const {quizId}=x
                const {quizTitle}=quizId
                const {marks}=x
                arr.push({quizTitle,marks})
            }

        res.json(
            {       success: "true",
                 "Total Marks": arr
        })
    } catch (e) { next(e) }
}