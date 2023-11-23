import React from 'react';
import QuizCard from './QuizCard';
import HistoryCard from './HistoryCard';
import { Route, Routes } from 'react-router-dom';

// Import the background image
import backgroundImage from '../assets/bg.jpg';

const Dashboard = () => {
  // Define a style object for the background image
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className='theme-bg-trinary min-h-screen' style={backgroundStyle}>
      <main className='p-4 md:p-8 lg:px-12 xl:px-24 2xl:px-32'>
        {/* <div className='flex items-center'>
          <h2 className='mr-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold text-dark-green'>
            DashBoard
          </h2>
        </div> */}

        <div className='mt-5'>
          <QuizCard />
          <HistoryCard />
        </div>

        <div className='grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'></div>
      </main>
    </div>
  );
};

export default Dashboard;
