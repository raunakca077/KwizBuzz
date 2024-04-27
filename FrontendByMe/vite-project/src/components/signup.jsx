import { useState } from "react"
import Button from "./button";
import axios from "axios";

export const Signup=()=>{
    const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [pass,setPass]=useState("")
const [role,setRole]=useState("")
return <div className="flex-row">  
   <div> {"Enter Name : "}
<input onChange={e=>{setName(e.target.value)}} placeholder="Enter name"/></div>
<div> {"Enter Email : "}
<input onChange={e=>{setEmail(e.target.value)}} placeholder="Enter email"/></div>
<div> {"Enter Role : "}
<input onChange={e=>{setRole(e.target.value)}} placeholder="Enter pass"/></div>
<div> {"Enter Pass : "}
<input onChange={e=>{setPass(e.target.value)}} placeholder="Enter role"/></div>
<Button send={async()=>{
    await axios.post("http://localhost:7700/api/users/signup",
    {
      username:name,
      email,
      password:pass,
      role
    })
  }} label={"ok"}/>
</div>
}