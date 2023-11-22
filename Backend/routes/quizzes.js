//Teachers

const express=require("express");
const router=express.Router({mergeParams:true});
const ExpressError=require("../utils/ExpressError.js")
const {schemaVal}=require('../schemaVal.js')
const {viewDashboard,makeQuiz,showQuiz,deleteQuiz,showStudents,addQues,allQues,deleteQues,generateLink,uploadResult}=require('../controllers/quizzes.js')
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
        .get(isAdmin,showQuiz)
        .delete(isAdmin,deleteQuiz)
router.post("/:id/addQues",isAdmin,addQues)
router.get("/:id/allQues",isAdmin,allQues)
router.delete("/:quizId/:quesId/deleteQues",isAdmin,deleteQues)
router.get("/:id/generateLink",isAdmin,generateLink)
router.get("/:id/uploadResult",isAdmin,uploadResult)       //here id quiz id
router.get("/:id/showStudents",isAdmin,showStudents)



module.exports=router