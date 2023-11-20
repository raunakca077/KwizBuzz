const express=require("express");
const app=express();
module.exports=app;
const path=require("path")
const mO=require("method-override")     //used for put and delete routes
// const ejsMate=require("ejs-mate")       //used for partials layout
const ExpressError=require("./utils/ExpressError.js") 
const session =require("express-session")
const cookieParser=require("cookie-parser")

const {config} =require("dotenv")
config(
    {path:"./data/config.env"}
)
app.use(express.json())
app.use(cookieParser())

const sessionConfig=        //will be in dotenv
{
secret:"mysecret",
resave:false,
saveUnintialized:true,
expires:Date.now()+5*1000 , //1000=1 sec
}
app.use(session(sessionConfig))

const quizRoute=require("./routes/quizzes.js")
const userRoute=require("./routes/users.js")

app.use('/api/createQuiz',quizRoute)
app.use('/api/users',userRoute)

// app.engine("ejs",ejsMate)
//  app.use(express.urlencoded({extended:true})) //middleware used for json conversion


app.use(mO("_method"))

app.use(express.static(path.join(__dirname,"public")))
// app.set("views",path.join(__dirname,"views"))
// app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.render("home");
})



app.use((err,req,res,next)=>{
    const{sts=500,msg}=err;
    if(!msg)
    {
        msg="wrong"
    }
    res.status(sts).send(msg)
   
})

// app.all('*',(req,res,next)=>
// {
//     next(new ExpressError("err",656))
// })



