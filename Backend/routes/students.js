
const express=require("express");
const router=express.Router({mergeParams:true});
const ExpressError=require("../utils/ExpressError.js")

const {joinLink,submitQuiz,allAttempted,showResult}=require('../controllers/students.js')
const {isAuth}=require('../middlewares/auth.js')


router.use(express.json())

router.get("/join/:id",isAuth,joinLink)
router.post("/join/:id/submitQuiz",isAuth,submitQuiz)
router.get("/allAttempted",isAuth,allAttempted)
router.get("/:id/showResult",isAuth,showResult)


module.exports=router