const express=require("express");
const app=express();
const path=require("path")
const mO=require("method-override")



const mongoose = require('mongoose');
app.use(express.urlencoded({extended:true})) //middleware
app.use(mO("_method"))
const createQuiz=require("./models/CreateQuiz.js")

mongoose.connect('mongodb://127.0.0.1:27017/quizDB',{
    useNewUrlParser:true,
    // useCreateIndex:true,
    useUnifiedTopology:true
})

const db=mongoose.connection;
db.on("error",console.error.bind(console,"Fault in Connecting"));
db.once("open",()=>{console.log("DB is Connected")})



app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.render("home");
})

app.get("/createQuiz",async(req,res)=>{
    const quiz=await createQuiz.find({})
    res.render("createQuizzes/index.ejs",{quiz});
})

app.get("/createQuiz/new",async(req,res)=>{
    
    res.render("createQuizzes/new.ejs");
})

app.post("/createQuiz",async(req,res)=>{
    
    const newQuiz=new createQuiz(req.body.createQuiz);
    await newQuiz.save();
    res.redirect(`/createQuiz/${newQuiz.id}`)
})

app.get("/createQuiz/:id",async(req,res)=>{
    const {id}=req.params
   const quiz=await createQuiz.findById(id)
    res.render("createQuizzes/show.ejs",{quiz});
})

app.get("/createQuiz/:id/edit",async(req,res)=>{
    const {id}=req.params
   const quiz=await createQuiz.findById(id)
    res.render("createQuizzes/edit.ejs",{quiz});
})

app.put("/createQuiz/:id",async(req,res)=>{
    const {id}=req.params
  await createQuiz.findByIdAndUpdate(id,{...req.body.createQuiz})
    res.redirect(`/createQuiz/${id}`);
console.log("it works")
})

app.delete("/createQuiz/:id",async(req,res)=>{
    const {id}=req.params
  await createQuiz.findByIdAndDelete(id)
    res.redirect(`/createQuiz`);
})


app.listen(7700,()=>{console.log("serving on 7700")})