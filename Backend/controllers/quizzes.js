const createQuiz = require("../models/CreateQuizSchema.js")

module.exports.viewDashboard = async (req, res) => {
    const quiz = await createQuiz.find({ creatorId: req.creator._id })    //.populate("creatorId") for showing full detail of that objectID
    // res.render("createQuizzes/index.ejs",{quiz});
    res.json(
        {
            success: "true",
            quiz
        }
    )
}

module.exports.makeQuiz = async (req, res) => {
    const newQuiz = new createQuiz(req.body);
    newQuiz.creatorId = req.creator._id      //creator is just variable from auth.js
    await newQuiz.save();
    res.json(
        {
            success: "true",
            newQuiz
        }
    )
}

//showing specific quiz

module.exports.showQuiz = async (req, res) => {
    const { id } = req.params
    const quiz = await createQuiz.findById(id)
    res.json(
        { success: "true", Quiz: quiz })
}

//for updating quiz

module.exports.updateQuiz = async (req, res) => {
    const { id } = req.params
    await createQuiz.findByIdAndUpdate(id, { ...req.body.createQuiz })
    res.redirect(`/createQuiz/${id}`);
    console.log("it works")
}

//for deleting quiz



module.exports.deleteQuiz = async (req, res, next) => {
    try {
        const { id } = req.params
        await createQuiz.findByIdAndDelete(id)
        res.json(
            { success: "true", message: "Deletion is done !" })
    } catch (e) { next(e) }
}