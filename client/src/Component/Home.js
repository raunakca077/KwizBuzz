import React from 'react'
// import HomeVideo from '../assets/HomeVideo.mp4';
 
import { Link } from 'react-router-dom';
import './Home.css';
import CustomButton from './CustomButton';
import Images from '../Images';



const Home = () => {
  return (
    <div>
        {/* ------------------Video BackGround-------------- */}
    <div className='relative w-full h-screen bg-[#014751]'>
      {/* <video src={HomeVideo} autoPlay muted loop className="w-full h-full object-cover absolute "/> */}
       {/* ----------------------Navbar------------------ */}
      
          
        
       
    
      
       {/* ------------DIV-2----------- */}
       <div className='flex flex-col w-full h-96  top-4 '>
       <div className='flex flex-col h-80 w-[500px]  absolute left-5 top-[30%] z-10 rounded-lg gap-7'>
  <h1 className='text-white text-5xl font-bold '>Turn your quizzes into success stories</h1>
  <p className=' text-slate-300 text-2xl '>AI-powered skills and knowledge assessment software, serving 2.5M+ business and educational users worldwide.</p>
  <CustomButton></CustomButton>
</div>
<div className='relative left-[50%] top-[60%] '>
            <Images />
          </div>
</div>
    </div>
    {/* Animated Background Over */}
    {/* -----------------------------Code Div------------------------ */}
    <div className='flex flex-row bg-purple-200 gap-[15%]' >
    <div className='flex flex-col gap-3 mt-3 '>
       <h1 className=' text-3xl font-bold text-[#014751]'>Here to take a test?</h1>
       <p className='text-black opacity-80'>No registration required. Enter your access code and start.</p>
    </div>
    <div class="flex flex-row gap-4  ">
  <label class="mb-4">
    <input name="myInput" placeholder="Enter the access code" className="border-2 border-gray-300  
    px-4 py-2 focus:outline-none focus:border-blue-500 mt-4 w-[400px] rounded-lg" />
  </label>
  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md h-11 mt-4 focus:outline-none">Start Your Test</button>
</div>
    </div>
    </div>
    
  )
}

export default Home
