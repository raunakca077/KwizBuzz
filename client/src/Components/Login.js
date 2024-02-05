import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Register from '../assets/Register.jpg'
import { useState } from 'react';
import axios from "axios";

const Login = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formData.password.length<5)
    {
      alert('Password Length Can Be Too Small');
      navigate('/Login'); 
      return;
    }

    try {
      const response = await axios.post('http://localhost:7700/api/users/login', formData);
  
      if (response.data.success) {

        const token = response.data.token;

      // Save the token to local storage or wherever you prefer
      localStorage.setItem('token', token);
      alert(token)

  

        navigate('/Dashboard');
      } else {
        alert('this:');}
    } catch (error) {
      alert(error.response.data.message);
    }
  };
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
          <form onSubmit={handleSubmit}>
          <div className='flex flex-row gap-6 mt-9 border-0'>
                <label htmlFor='email' className='text-4xl'><i class="zmdi zmdi-account" ></i></label>
                <input type="email" name='email' id='email' autoComplete='off' placeholder='Your Email'
                 onChange={handleChange}
                
                required
                className='text-black border-b border-black outline-none focus:outline-none items-center
                justify-center w-[80%] ' />
                </div>

                <div className='flex flex-row gap-6 mt-9'>
                <label htmlFor='password' className='text-4xl'><i class="zmdi zmdi-lock" ></i></label>
                <input type="password" name='password' id='password' autoComplete='off' placeholder='Your Password'
                 
                 onChange={handleChange}
                 required
                className='text-black border-b border-black outline-none focus:outline-none items-center
                justify-center w-[80%] ' />
                </div>

                <div className=" SignIn-link items-center text-end pt-4  mr-5 mt-6">
                    <p className="text-[#000]"> <NavLink to='' className="rounded-pill rounded-sm p-2 signUpBtn-link text-[#4b4242] 
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
                 theme-bg-secondary text-[20px] hover:bg-blue-900 ml-10
                text-dark cursor-pointer rounded-xl" >Sign In</button>





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
