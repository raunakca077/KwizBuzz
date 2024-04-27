import { useState,useRef } from "react"
import axios from "axios"
import cook from "universal-cookie"
import { Signup } from "./signup"

export const Login=({setAuth,setReg})=>
{
    const buttonRef=useRef(false)

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
          buttonRef.current.click();
        }
      }
    
      document.addEventListener('keydown', handleKeyDown);

    const [player,setPlayer]=useState({})
        const cookie=new cook()

    const submit=(e)=>{
        e.preventDefault()
        axios.post("https://zanzibar-5.onrender.com/login",player)
            .then((res)=>
                {
                 if(res.data=="fail")
                 window.alert("user not found or wrong pass")
                        else
                 {   const {token,name,pass,email,uid}=res.data;
                    cookie.set("token",token)
                    cookie.set("name",name)
                    cookie.set("uid",uid)
                    cookie.set("email",email)
                    cookie.set("pass",pass)
                    setAuth(true);}
                })
    }


    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center ">
          <div className="bg-gray-700 bg-opacity-50 backdrop-blur-sm rounded-lg shadow-lg p-8 max-w-md w-full">
            <h2 className="text-3xl font-extrabold text-white mb-6 text-center">
              Welcome to <span className="text-red-500">ZanziBar</span> Zone
            </h2>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-md bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                value={player.email}
                onChange={(evt) => setPlayer({ ...player, email: evt.target.value })}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-300 font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 rounded-md bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                value={player.pass}
                onChange={(evt) => setPlayer({ ...player, pass: evt.target.value })}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                ref={buttonRef}
                onClick={submit}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500 mb-10"
              >
                Login
              </button>
              <a href="#" className="text-gray-400 hover:text-gray-300">
              Forgot Password?
          </a>
        </div>
        <button onClick={()=>setReg(true)} className="text-gray-400 hover:text-gray-300 ">
              Dont't Have Any 😢
          </button>
      </div>
    </div>
  );
}