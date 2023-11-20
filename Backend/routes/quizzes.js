const express=require("express");
const router=express.Router({mergeParams:true});

const catchError=require("../utils/catchError.js")
const ExpressError=require("../utils/ExpressError.js")
const createQuiz=require("../models/CreateQuizSchema.js")
const {schemaVal}=require('../schemaVal.js')
const {viewDashboard,makeQuiz,showQuiz,updateQuiz,deleteQuiz}=require('../controllers/quizzes.js')
const {isAdmin}=require('../middlewares/auth.js')


const checkValid=(req,res,next)=>
{

   
    const {err}=schemaVal.validate(req.body)
    if(err)
    { 
        const message=err.details.map(e=>e.message).join(',')
        throw new ExpressError(message,199)
    }
    else{
        next()}
}


router.use(express.json())



router.route("/")
        .get(isAdmin,viewDashboard)
        .post(isAdmin,makeQuiz)


        //For updating,deleting
router.route("/:id")
        .get(showQuiz)
        .put(updateQuiz)
        .delete(deleteQuiz)


// For adding Question
router.get("/:id/addQ",catchError(async(req,res)=>{
const {id}=req.params
res.render("createQuizzes/question.ejs",{id});
}))

router.patch("/:id/addQ",catchError(async(req,res)=>{
    const {id}=req.params
    const {q,ans}=req.body;
await createQuiz.findByIdAndUpdate(id,{$push:{quizQuestion:q,quizAnswer:ans}})
    res.redirect(`/createQuiz/${id}`)
}))



module.exports=router