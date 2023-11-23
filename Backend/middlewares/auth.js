const user=require("../models/usersSchema.js")
const jwt=require("jsonwebtoken")


module.exports.isAuth=async(req,res,next)=>
{
   try {
    const {token}=req.cookies;
    if(!token)
    return res.status(404).json({success:false,message:"Not Logged In"})
const decode =jwt.verify(token,process.env.JWT_SECRET)
req.user=await user.findById(decode._id);
next()
   } catch (error) {
    next(error)
   }
}

module.exports.isAdmin=async(req,res,next)=>
{
   try {
    const {token}=req.cookies;
    if(!token)
    return res.status(404).json({success:false,message:"Not Logged In"})
const decode =jwt.verify(token,process.env.JWT_SECRET)
const theUser=await user.findById(decode._id);
if(theUser.role!="admin")return res.status(404).json({success:false,message:"you are not admin !"})
req.creator=theUser
next()
   } catch (error) {
    next(error)

   }
}
