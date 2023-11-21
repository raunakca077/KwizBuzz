import React from 'react'
import { NavLink } from 'react-router-dom';
import Register from '../assets/Register.jpg'

const Login = () => {
  return (
    <div className='bg-slate-500 h-screen flex items-center justify-center'>
      {/* First Flex Container */}
      <div className='flex flex-row h-[85%] w-[80%] bg-white mt-12 rounded-lg shadow-md shadow-orange-200 
        border-2'>
        {/* Image */}
        <img src={Register} alt='' className='w-1/2 h-auto animate-pulse' />

        {/* Second Flex Container */}
        <div className='w-1/2 p-8'>
          {/* Content for the second div */}
          <h2 className='text-3xl font-bold mb-4 ml-[30%]'>Login</h2>
          <form>
          <div className='flex flex-row gap-6 mt-9'>
                <label htmlFor='email' className='text-4xl'><i class="zmdi zmdi-account" ></i></label>
                <input type="email" name='email' id='email' autoComplete='off' placeholder='Your Email'
                className='text-black border-b border-black outline-none focus:outline-none items-center
                justify-center w-[80%] ' />
                </div>

                <div className='flex flex-row gap-6 mt-9'>
                <label htmlFor='password' className='text-4xl'><i class="zmdi zmdi-lock" ></i></label>
                <input type="email" name='password' id='password' autoComplete='off' placeholder='Your Password'
                className='text-black border-b border-black outline-none focus:outline-none items-center
                justify-center w-[80%] ' />
                </div>

                <div className=" SignIn-link items-center justify-center pt-4   mt-6">
                    <p className="text-[#000]"> <NavLink to='' className="signUpBtn-link text-[#4b4242] 
                    font-semibold hover:underline ml-2 ">Forgot Password?</NavLink>
                        </p>
                </div>
                  {/* ---------------checkBox-------------------- */}
                <div className="my-5 pb-3 flex items-center mt-9">
                <input type="checkbox" className="mr-2" />
                 <label className="text-[#000] font-[14px]">Remember me</label>
              </div>

              {/* <!--------Submit Button---------> */}
                <button type="submit " className="relative w-[400px] h-[30px] ml-10
                 bg-red-500 text-[16px] hover:bg-blue-900
                text-[#fff] cursor-pointer rounded-xl" >Sign In</button>

<div className=" SignIn-link items-center justify-center pt-4 px-7 ml-24 mt-6">
                    <p className="text-[#000]">Don't have an account? <NavLink to='/SignUp' className="signUpBtn-link text-[#f4157e] 
                    font-semibold hover:underline ">Sign Up</NavLink>
                        </p>

                       

                </div>

          </form>
        </div>
      </div>
    </div>
    
  );
  }

export default Login
