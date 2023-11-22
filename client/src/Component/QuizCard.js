import React from 'react'
import { LuBrainCircuit } from "react-icons/lu";
import { FaHistory } from "react-icons/fa";

const QuizCard = () => {
  return (
    <div>
    <div className='flex flex-row w-full '>
    <div className=' shadow-sm shadow-black rounded-lg h-[150px] w-[50%] mt-8  '>
      {/*  */}
      <div className='flex flex-row gap-[60%] mt-4'>
        <h2 className='font-bold text-3xl mx-3 '>Quiz Me!</h2>
        
         <LuBrainCircuit size={38} color='black'  />
         
        </div>
      <p className=' mt-6 mx-3'>Challenge yourself with a uiz with a topic of our choice</p>
    </div>
    
    <div className=' shadow-sm shadow-black rounded-lg h-[150px] w-[45%] mt-8 '>
      {/*  */}
      <div className='flex flex-row gap-[60%] mt-4'>
        <h2 className='font-bold text-3xl mx-3 '>History</h2>
        
         <FaHistory  size={38} color='black'  />
         
        </div>
      <p className=' mt-6 mx-3'>View Past quiz attempt</p>
    </div>
 </div>
{/* ------------------------------------------------------------------------------------------- */}
 <div className='flex flex-row w-full gap-5 '>
    <div className=' shadow-sm shadow-black rounded-lg h-[300px] w-[60%] mt-8  '>
      {/*  */}
      <div className='flex flex-row gap-[60%] mt-4'>
        <h2 className='font-bold text-3xl mx-3 '>Topics</h2>
        
         <LuBrainCircuit size={38} color='black'  />
         
        </div>
      <p className=' mt-6 mx-3'>Challenge yourself with a uiz with a topic of our choice</p>
    </div>
    
    <div className=' shadow-sm shadow-black rounded-lg h-[300px] w-[35%] mt-8 '>
      {/*  */}
      <div className='flex flex-row gap-[60%] mt-4'>
        <h2 className='font-bold text-3xl mx-3 '>Recent Activity</h2>
        
        
         
        </div>
      <p className=' mt-6 mx-3'></p>
    </div>
 </div>

    </div>
  )
}

export default QuizCard
