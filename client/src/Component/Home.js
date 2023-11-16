import React from 'react'
import HomeVideo from '../assets/HomeVideo.mp4';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div>
        {/* ------------------Video BackGround-------------- */}
    <div className='relative w-full h-screen '>
      <video src={HomeVideo} autoPlay muted loop className="w-full h-full object-cover absolute "/>
       {/* ----------------------Navbar------------------ */}
      <div className='absolute  left-0 w-full z-10 flex justify-between items-center p-4 text-white
         bg-black bg-opacity-30  shadow-md shadow-black top-3'>
          
        <div className='text-white font-bold text-[40px] hover:translate-x-4 '>
          Kwizz?
        </div>
        <div className=' flex space-x-8 text-white font-bold text-[20px] mr-8 '>
         <Link className=' ' to={"/"}>Home</Link>
         <Link className='' to={"/Dashboard"}>Dashboard</Link>
         <Link className='' to={"/Contact"}>Contact</Link>
         <Link className='' to={"/SignUp"}>About</Link>
         <Link className='' to={"/Login"}>Login</Link>
         <Link className='' to={"/SignUp"}>SignUp</Link>

        </div>
       
    </div> 
      <div className='absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 
      text-center text-white font-bold  '>
      <div className='text-animation'>
          Welcome to the <span className='typing-animation'>Land of Quizzes</span>
        </div>
      </div>
       {/* ------------DIV-2----------- */}
       <div className='flex flex-col bg-black bg-opacity-70 h-60 w-[500px] 
       absolute left-5 top-[40%] z-10 rounded-lg'>
  <h1>Hello</h1>
  <p>Jee</p>
  <button>Button</button>
</div>

    </div>
    {/* Animated Background Over */}
    <div >
     
    </div>
    </div>
    
  )
}

export default Home
