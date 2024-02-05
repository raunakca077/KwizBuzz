

// AskPage



import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Quiz3 from '../assets/Quiz3.jpg';
import { Router,Route, Routes } from 'react-router-dom';

const AskPage = () => {
  const navigate = useNavigate();
  const isLoggedIn = false; // Replace this with your authentication logic

  const handleGiveQuizClick = () => {
    // Check if user is logged in
    if (isLoggedIn) {
      // Redirect to QuizPortal if logged in
      navigate('/QuizPortal');
    } else {
      // Redirect to Login page if not logged in
      navigate('/Login');
    }
  };

  return (
    
    <div>
     
      
      <div className='w-full h-full'>
        {/* Image */}
        <img src={Quiz3} alt='' className='w-[50%] h-[30%] mt-[8%]  ml-0' />
        <div className='flex mt-5 items-center justify-center mx-auto w-[30%] h-[40%] gap-10'>
          <Link
            className='bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[50%] h-[50%] text-center'
            style={{ textDecoration: 'none' }}
            to="/AddQuestionManually"
          >
            Create Quiz
          </Link>
          {/* On clicking 'Give Quiz', it will call the handleGiveQuizClick function */}
          <div onClick={handleGiveQuizClick}>
            <Link
              className='bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[40%] h-[40%] ml-4 text-center'
              style={{ textDecoration: 'none' }}
            >
              Give Quiz
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskPage;
