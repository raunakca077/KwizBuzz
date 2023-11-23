const mongoose = require('mongoose');

module.exports.connectDB=()=>{
mongoose.connect(process.env.MONGO_URI,{
    dbName:"quizDB",
    // useNewUrlParser:true,
    //  useCreateIndex:true,
    // useUnifiedTopology:true
})

const db=mongoose.connection;
db.on("error",console.error.bind(console,"Fault in Connecting"));
db.once("open",()=>{console.log("DB is Connected")})
}
