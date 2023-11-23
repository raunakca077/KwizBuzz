const express=require("express");
const router=express.Router({mergeParams:true});
const {login,signup,profile,logout}=require('../controllers/users.js')
const {isAuth}=require('../middlewares/auth.js')

router.use(express.json())

router.post("/login",login);
router.post("/signup",signup);
router.get("/logout",logout);
router.get("/profile",isAuth,profile)

module.exports=router