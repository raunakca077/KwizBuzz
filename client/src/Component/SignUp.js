import React from 'react'
import Register from '../assets/Register.jpg'
import { NavLink } from 'react-router-dom'
const SignUp = () => {

  const submitHandler = (e) =>{
      e.preventDefault();
  };
  return (

    <div className='bg-slate-500 h-screen flex items-center justify-center'>
      {/* First Flex Container */}
      <div className='flex flex-row h-[85%] w-[80%] bg-white mt-14 rounded-lg shadow-md shadow-orange-200 
        border-2'>
        {/* Image */}
        <img src={Register} alt='' className='w-1/2 h-auto animate-pulse' />

        {/* Second Flex Container */}
        <div className='w-1/2 p-8'>
          {/* Content for the second div */}
          <h2 className='text-3xl font-bold mb-4 ml-[30%]'>Sign Up</h2>
          <form onSubmit={submitHandler}>
          <div className='flex flex-row gap-6 mt-9'>
                <label htmlFor='name' className='text-xl'><i class="zmdi zmdi-account" ></i></label>
                <input type="name" name='name' id='name' autoComplete='off' placeholder='Your Name'
                className='text-black border-b border-black outline-none focus:outline-none items-center
                justify-center w-[80%] ' />
                </div>

                <div className='flex flex-row gap-6 mt-9'>
                <label htmlFor='email' className='text-xl'><i class="zmdi zmdi-email" ></i></label>
                <input type="email" name='email' id='email' autoComplete='off' placeholder='Your Email'
                className='text-black border-b border-black outline-none focus:outline-none items-center
                justify-center w-[80%] ' />
                </div>

                <div className='flex flex-row gap-6 mt-9'>
                <label htmlFor='password' className='text-xl'><i class="zmdi zmdi-lock" ></i></label>
                <input type="email" name='password' id='password' autoComplete='off' placeholder='Your Password'
                className='text-black border-b border-black outline-none focus:outline-none items-center
                justify-center w-[80%] ' />
                </div>

                <div className='flex flex-row gap-6 mt-9'>
                <label htmlFor='cpassword' className='text-xl'><i class="zmdi zmdi-lock" ></i></label>
                <input type="cpassword" name='cpassword' id='cpassword' autoComplete='off' placeholder='Confirm Your Password'
                className='text-black border-b border-black outline-none focus:outline-none items-center
                justify-center w-[80%] ' />
                </div>

                <div className='flex flex-row gap-6 mt-9'>
                <label htmlFor='phone' className='text-xl'><i class="zmdi zmdi-phone" ></i></label>
                <input type="phone" name='phone' id='phone' autoComplete='off' placeholder='Your Phone'
                className='text-black border-b border-black outline-none focus:outline-none items-center
                justify-center w-[80%] ' />
                </div>
                  {/* ---------------checkBox-------------------- */}
                <div className="my-5 pb-3 flex items-center mt-9">
                <input type="checkbox" className="mr-2" />
                 <label className="text-[#000] font-[14px]">Remember me</label>
              </div>

              {/* <!--------Submit Button---------> */}
                <button type="submit " className="relative w-[400px] h-[30px] ml-10
                 bg-red-500 text-[16px] hover:bg-blue-900
                text-[#fff] cursor-pointer rounded-xl" >Sign Up</button>

<div className=" SignIn-link items-center justify-center pt-4 px-7 ml-24 mt-0">
                    <p className="text-[#000]">Already have an account? <NavLink to='/Login' className="signUpBtn-link text-[#f4157e] 
                    font-semibold hover:underline ">Sign In</NavLink>
                        </p>
                </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp
