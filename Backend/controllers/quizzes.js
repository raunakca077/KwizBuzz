const quizDb = require("../models/CreateQuizSchema.js")
const userDb = require("../models/usersSchema.js")
const questionDb = require("../models/questionSchema.js")
const resultDb = require("../models/resultSchema.js")

module.exports.viewDashboard = async (req, res,next) => {try {
    
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

module.exports.makeQuiz = async (req, res,next) => {
    try {
        const newQuiz = new quizDb(req.body);
    newQuiz.creatorId = req.creator._id      //creator is just variable from auth.js
    await newQuiz.save();
    res.json(
        {
            success: "Quiz Is Added",
        }
    )
    } catch (error) {
        next(error)
    }
}

//showing specific quiz

module.exports.showQuiz = async (req, res,next) => {try {
    
    const { id } = req.params
    const quiz = await quizDb.findById(id)
    res.json(
        { success: "true", Quiz: quiz })
} catch (error) {
    next(error)

}
}


//for deleting quiz



module.exports.deleteQuiz = async (req, res, next) => {
    try {
        const { id } = req.params
        await quizDb.findByIdAndDelete(id)
        res.json(
            { success: "true", message: "Deletion is done !" })
    } catch (e) { next(e) }
}




module.exports.addQues = async (req, res, next) => {
    try {
        const { id } = req.params
        const quiz=await quizDb.findById(id)
        const ques=new questionDb(
            {
        question: req.body.question,
        options: req.body.options,
        answerOption: req.body.answerOption,
        positveScore:req.body.positveScore,
        negativeScore:req.body.negativeScore,
            }
            
        )
        await ques.save()
        quiz.quizQuestion.push(ques._id);
        quiz.save()
            console.log(ques._id)
        res.json(
            { success: "true", message: "Question is saved !" })
    } catch (e) { next(e) }
}


module.exports.deleteQues = async (req, res, next) => {
    try {
        const { quizId,quesId } = req.params
        const quiz=await quizDb.findById(quizId)
        await questionDb.findByIdAndDelete(quesId)
        const index=await quiz.quizQuestion.indexOf(quesId)
        quiz.quizQuestion.splice(index,1)
        res.json(
            { success: "true", message: "Question is deleted !" })
    } catch (e) { next(e) }
}

module.exports.allQues = async (req, res, next) => {
    try {
        const { id } = req.params
        const quiz=await quizDb.findById(id).populate("quizQuestion")
        const allQues=quiz.quizQuestion
        res.json(
            { success: "true",allQues })
    } catch (e) { next(e) }
}



module.exports.generateLink = async (req, res, next) => {
    try {
        const { id } = req.params
        res.json(
            { success: "true",TestLink:id })
    } catch (e) { next(e) }
}


module.exports.uploadResult = async (req, res, next) => {
    try {
        const { id } = req.params
        const quizResult=await resultDb.find({quizId:id})
        for(let x of quizResult)
       { x.resultOut=true
    x.save()}
        res.json(
            { success: "true",message:"Now students can see their result" })
    } catch (e) { next(e) }
}


module.exports.showStudents = async (req, res, next) => {
    try {
        const {id}=req.params
        const data=await resultDb.find({quizId:id}).populate("studentId")
        console.log(data)
        const studentArr=[]
            for(let x of data)
            {
                const {studentId}=x
                const {username}=studentId
                const {email}=studentId
                const {marks}=x
                studentArr.push({username,email,marks})
            }


        res.json(
            { success: "true", Students:studentArr })
    } catch (e) { next(e) }
}
