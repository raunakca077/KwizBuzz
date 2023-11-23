const jwt=require("jsonwebtoken")

module.exports.sendToken=(user,res,msg,statusCode)=>
{
    const token=jwt.sign({_id:user._id},process.env.JWT_SECRET)


    res.status(statusCode).cookie("token",token,{
        httpOnly:true,
        maxAge:25*60*1000,
        // sameSite:"none",     //cant run on postman also chect for logout
        // secure:true
    }).json
       ( {success:true,msg})
}