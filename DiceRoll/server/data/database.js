import mongoose from "mongoose"

export const connectDB=()=>{
mongoose.connect("mongodb+srv://raunakchauhan22:Qwerty22@cluster0.80gqsar.mongodb.net/?retryWrites=true&w=majority",{
    dbName:"onlineGame",
    useNewUrlParser:true,
    //  useCreateIndex:true,
    // useUnifiedTopology:true
})

const db=mongoose.connection;
db.on("error",console.error.bind(console,"Fault in Connecting"));
db.once("open",()=>{console.log("DB is Connected")})
}
