import React from 'react'
import QuizCard from './QuizCard';
import HistoryCard from './HistoryCard';
import { Route, Routes } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className=' '>
    <main className='p-8 mt-14 w-full mx-9 '>
      <div className=' flex items-center'>
       <h2 className=' mr-2 text-3xl font-bold tracking-tight'>
        DashBoard
       </h2>
      </div>
       
       <div className=' '>
       <QuizCard></QuizCard>
       <HistoryCard></HistoryCard>
       </div>
        
        <div className='grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7'></div>
      
    </main>
    </div>
  );
}

export default Dashboard;
