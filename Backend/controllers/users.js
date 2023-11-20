const {sendToken}=require("../utils/feature.js")
const user=require("../models/usersSchema.js")

const bcrypt=require("bcrypt")


module.exports.login=async(req,res,next)=>{
    const{email,password}=req.body;
    let u=await user.findOne({email}).select("+password");
    if(!u) return res.status(404).json
       ( {success:false,message:"Invalid email or password !!"})

       const isMatch=await bcrypt.compare(password,u.password)
       if(!isMatch) return res.status(404).json
       ( {success:false,message:"Invalid email or password !!"})

   sendToken(u,res,`Hello,${u.username}`,200);
}

module.exports.signup=async(req,res,next)=>{
    const{username,email,password,role}=req.body;
    let u=await user.findOne({email:email});
    if(u) return res.status(404).json
       ( {success:false,message:"User already exist !!"})

       const hashPass=await bcrypt.hash(password,5);

    u=await user.create({username,email,password:hashPass,role});
   sendToken(u,res,"Registered Successfully",201);

}

module.exports.profile=(req,res)=>{
    res.status(200).json
       ( {success:true,ProfileDetails:req.u})

}

module.exports.logout=(req,res)=>{
    res.status(200).clearCookie("token")
    .json
       ( {success:true})

}