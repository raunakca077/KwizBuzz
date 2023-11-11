
const mongoose = require('mongoose');
const data=require("./data")
const createQuiz=require("../models/CreateQuiz.js")

mongoose.connect('mongodb://127.0.0.1:27017/quizDB',{
    useNewUrlParser:true,
    // useCreateIndex:true,
    useUnifiedTopology:true
})

const db=mongoose.connection;
db.on("error",console.error.bind(console,"Fault in Connecting"));
db.once("open",()=>{console.log("DB is Connected")})


const seedDB=async()=>{
    for(let i=0;i<3;i++)
    {
        const newData=new createQuiz(
            {
             quizId:data[i].quizId,
             quizTitle:data[i].quizTitle,
             quizDescription:data[i].quizDescription,
             quizType:data[i].quizType

            })
         await newData.save()        
    }
    }
    seedDB();