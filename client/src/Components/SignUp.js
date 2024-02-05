      import Register from '../assets/Register.jpg';
      import { NavLink, useNavigate } from 'react-router-dom';
      import axios from 'axios';
      import React, { useState } from 'react';
      
      const SignUp = () => {
        const navigate = useNavigate();
        const [formData, setFormData] = useState({
          username: '',
          email: '',
          password: '',
          role: '',
        });
      
        const handleChange = (e) => {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          });
        };
      
        const handleSubmit = async (e) => {
          e.preventDefault();
          if (formData.password !== formData.confirmPassword) {
            alert('Password and Confirm Password do not match.');
            navigate('/SignUp'); // Redirect to signup page
            return;
          }
          if(formData.password.length<5)
          {
            alert('Password Length Can Be Too Small');
            navigate('/SignUp'); // Redirect to signup page
            return;
          }
      
          // You can send the formData to your backend here
          try {
            const response = await axios.post('http://localhost:7700/api/users/signup', formData);
        
            if (response.data.success) {
              navigate('/Login');
            } else {
              alert('this:');}
          } catch (error) {
            alert(error.response.data.message);
          }
        };
      
        return (
          <div className='bg-slate-500 h-screen flex items-center justify-center'>
            {/* First Flex Container */}
            <div className='flex flex-row h-[85%] w-[80%] bg-white mt-14 rounded-lg shadow-md shadow-orange-200 border-2'>
              {/* Image */}
              <img src={Register} alt='' className='w-1/2 h-auto animate-pulse' />
      
              {/* Second Flex Container */}
              <div className='w-1/2 p-8'>
                {/* Content for the second div */}
                <h2 className='text-3xl font-bold mb-4 ml-[30%]'>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                  {/* Name */}
                  <div className='flex flex-row gap-6 mt-9'>
                    <label htmlFor='username' className='text-xl'>
                      <i className="zmdi zmdi-account"></i>
                    </label>
                    <input
                      type='text'
                      name='username'
                      id='username'
                      autoComplete='off'
                      placeholder='Your Name'
                      className='text-black border-b border-black outline-none focus:outline-none items-center justify-center w-[80%]'
                      onChange={handleChange}
                      required
                    />
                  </div>
      
                  {/* Email */}
                  <div className='flex flex-row gap-6 mt-9'>
                    <label htmlFor='email' className='text-xl'>
                      <i className="zmdi zmdi-email"></i>
                    </label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      autoComplete='off'
                      placeholder='Your Email'
                      className='text-black border-b border-black outline-none focus:outline-none items-center justify-center w-[80%]'
                      onChange={handleChange}
                      required
                    />
                  </div>
      
                  {/* Password */}
                  <div className='flex flex-row gap-6 mt-9'>
                    <label htmlFor='password' className='text-xl'>
                      <i className="zmdi zmdi-lock"></i>
                    </label>
                    <input
                      type='password'
                      name='password'
                      id='password'
                      autoComplete='off'
                      placeholder='Your Password'
                      className='text-black border-b border-black outline-none focus:outline-none items-center justify-center w-[80%]'
                      onChange={handleChange}
                      required
                    />
                  </div>
      
                  {/* Confirm Password */}
                   <div className='flex flex-row gap-6 mt-9'>
                    <label htmlFor='confirmPassword' className='text-xl'>
                      <i className="zmdi zmdi-lock"></i>
                    </label>
                    <input
                      type='password'
                      name='confirmPassword'
                      id='confirmPassword'
                      autoComplete='off'
                      placeholder='Confirm Your Password'
                      className='text-black border-b border-black outline-none focus:outline-none items-center justify-center w-[80%]'
                      onChange={handleChange}
                      required
                    />
                  </div> 
      
                  {/* Phone */}
                  <div className='flex flex-row gap-6 mt-9'>
                    <label htmlFor='role' className='text-xl'>
                      <i className="zmdi zmdi-phone"></i>
                    </label>
                    <input
                      type='text'
                      name='role'
                      id='role'
                      autoComplete='off'
                      placeholder='admin or user'
                      className='text-black border-b border-black outline-none focus:outline-none items-center justify-center w-[80%]'
                      onChange={handleChange}
                      required
                    />
                  </div>
      
                  {/* Remember Me */}
                  <div className="my-5 pb-3 flex items-center mt-9">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-[#000] font-[14px]">Remember me</label>
                  </div>
      
                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="relative w-[400px] h-[30px] ml-10 bg-red-500 text-[16px] hover:bg-blue-900 text-[#fff] cursor-pointer rounded-xl"
                  >
                    Sign Up
                  </button>
      
                  {/* Sign In Link */}
                  <div className="SignIn-link items-center justify-center pt-4 px-7 ml-24 mt-0">
                    <p className="text-[#000]">
                      Already have an account?{' '}
                      <NavLink to='/Login' className="signUpBtn-link text-[#f4157e] font-semibold hover:underline">
                        Sign In
                      </NavLink>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
      };
      
      export default SignUp;
      