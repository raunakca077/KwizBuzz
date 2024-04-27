import express from "express"
import cors from "cors"
import {v4 as uuid} from "uuid"
import bcrypt from "bcrypt"
const app=express()
import {connectDB} from '../data/database.js'
import playerModel from "../models/usersSchema.js"
import jwt from 'jsonwebtoken'
import http from "http"

import {Server} from "socket.io"


const server = new http.createServer(app)
const io=new Server(server,{
    cors:{
        origin:"https://splendorous-pastelito-5ba02c.netlify.app",
        methods:["GET","POST"],
        credentials:true
    }
})

app.use(cors(
  {
    origin:"https://splendorous-pastelito-5ba02c.netlify.app"
  }
));
app.use(express.json());

connectDB();

const sktId=[]
const rooms={}

io.on("connection",(socket)=>
{
    
    socket.emit("welcome",`Welcome To The Game`)
    socket.broadcast.emit("welcome",`this is id, ${socket.id}`)
    

    socket.on('createRoom', () => {
        const roomId = uuid(); // Generate a unique room ID
        socket.join(roomId);
        rooms[roomId] = {
          players: [socket.id],
          gameStarted: false,
        };
        console.log(`New room created: ${roomId}`);
        socket.emit('roomCreated', roomId);
        socket.emit('joinedRoom', roomId, rooms[roomId].players);
      });
    
      socket.on('joinRoom', (roomId) => {
        if (rooms[roomId]&&rooms[roomId].players.length<2) {
          socket.join(roomId);
          rooms[roomId].players.push(socket.id);
          socket.emit('joinedRoom', roomId, rooms[roomId].players);
          socket.to(roomId).emit('playerJoined', socket.id);
       
        } else {
          socket.emit('invalidRoom');
        }
      });
    
    //   socket.on('disconnect', () => {
    //     console.log('A user disconnected');
    //     // Remove the user from the room they were in
    //     Object.entries(rooms).forEach(([roomId, room]) => {
    //       if (room.players.includes(socket.id)) {
    //         room.players = room.players.filter((id) => id !== socket.id);
    //         socket.to(roomId).emit('playerLeft', socket.id);
    //       }
    //     });
    // });    

      socket.on("total-players",(roomId)=>
      {
        io.to(roomId).emit('total-players', rooms[roomId].players.length);
      })
    socket.on("message",(data)=>
    {
      // console.log(data)
       io.to(data.roomNo).emit("recieve-msg",data)
    })

socket.on("startAgain",(data)=>
{
  io.emit("start-again",true)
})

    socket.on("chips",(data)=>
    {
       io.to(data.roomNo).emit("updatedChips",{chips:data.chips,name:data.name})
    })

    socket.on("start",(data)=>
    {
      io.to(socket.id).emit("turn",false)
      socket.broadcast.to(data.roomNo).emit("turn",true)
        io.to(socket.id).emit("start",1);

    })

    socket.on("setPoints",(data)=>
    {
        io.emit("newPts",data);
    })


    socket.on("rolled",(data)=>
    {
       
       io.to(socket.id).emit("turn",false)
       io.to(data.roomNo).emit("rolledNo",data.arr)
       socket.broadcast.to(data.roomNo).emit("turn",true)
    //    console.log(sktId)
    //    console.log("->>>",socket.id)
    })

    // socket.on("disconnect",()=>{console.log("user disconnected")})
})


app.post("/login",async(req,res)=>
{try{
const {email,pass}=req.body;

const p=await playerModel.findOne({email:email}).select("+pass")
if(!p){return res.json("fail")}
const isCorrect=await bcrypt.compare(pass,p.pass)
if(!isCorrect){return res.json("fail")}
else
{
    const token=jwt.sign({_id:p.uid},"mysecret")
    
    // console.log(name,uid,token,hashPass)
    res.json({token,name:p.name,pass,uid:p.uid,email:p.email})
   
}

}
catch(e){console.log(e)}
})

app.post("/signup",async(req,res)=>
{   try{
    
    const {name,email,pass}=req.body
    
const p=await playerModel.findOne({email:email})

if(p){console.log(p); return res.json("fail")}
    const uid=uuid();
    const hashPass= await bcrypt.hash(pass,10)
    playerModel.create({name,email,pass:hashPass,uid:uid})

    const token=jwt.sign({_id:uid},"mysecret")
    
    
    res.json({token,name,hashPass,email,uid})
}catch(e){res.json(e)}
})


server.listen(3077,()=>
{
    console.log("server running on 3077")
})