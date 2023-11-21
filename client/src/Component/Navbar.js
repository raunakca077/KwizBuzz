import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    
     <div className='absolute  left-0 w-full z-10 flex justify-between items-center p-4 text-white
           shadow-md shadow-black top-3 bg-black h-12'>
          
        <div className='text-white font-bold text-[40px] hover:translate-x-4 '>
          Kwizz?
        </div>
        <div className=' flex space-x-8 text-white font-bold text-[20px] mr-8 '>
         <Link className=' ' to={"/"}>Home</Link>
         <Link className='' to={"/Dashboard"}>Dashboard</Link>
         <Link className='' to={"/Contact"}>Contact</Link>
         <Link className='' to={"/SignUp"}>About</Link>
         <Link className='' to={"/Login"}>Login</Link>
         

        </div>
    </div>
    
  );
}

export default Navbar

