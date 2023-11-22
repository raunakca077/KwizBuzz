const {sendToken}=require("../utils/feature.js")
const user=require("../models/usersSchema.js")

const bcrypt=require("bcrypt")
const ExpressError=require("../utils/ExpressError.js") 

module.exports.login=async(req,res,next)=>{try{
    const{email,password}=req.body;
    let u=await user.findOne({email}).select("+password");
    
    if(!u)return next(new ExpressError("Invalid email or password !!",404))

       const isMatch=await bcrypt.compare(password,u.password)
       if(!isMatch) return next(new ExpressError("Invalid email or password !!",404))

   sendToken(u,res,`Hello,${u.username}`,200);
}
catch(err)
{
   next(err)
}
}

module.exports.signup=async(req,res,next)=>{
    try {
      const{username,email,password,role}=req.body;
    let u=await user.findOne({email:email});
    if(u) return next(new ExpressError("User Already exist",404))

       const hashPass=await bcrypt.hash(password,5);

    u=await user.create({username,email,password:hashPass,role});
   sendToken(u,res,"Registered Successfully",201);

    } catch (error) {
      next(error)
    }
}

module.exports.profile=(req,res)=>{
    res.status(200).json
       ( {success:true,ProfileDetails:req.user})

}

module.exports.logout=(req,res)=>{
    res.status(200).clearCookie("token")        // i think this can not be deployed please check for env variables
    .json
       ( {success:true})

}