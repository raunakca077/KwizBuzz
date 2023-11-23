import React from 'react';
import { LuBrainCircuit } from 'react-icons/lu';
import { FaHistory } from 'react-icons/fa';

const QuizCard = () => {
  return (
    <div>
      <div className="flex flex-row w-full">
        <div className="theme-bg-base shadow-lg rounded-lg h-[150px] w-[50%] mt-8 transform hover:scale-105 transition-transform duration-300">
          <div className="flex flex-row items-center gap-4 mt-4 mx-6">
            <LuBrainCircuit size={38} color="black" />
            <h2 className="font-bold text-3xl text-black">Quiz Me!</h2>
          </div>
          <p className="mt-6 mx-6 text-black">
            Challenge yourself with a quiz on a topic of your choice.
          </p>
        </div>

        <div className="ml-4 theme-bg-base shadow-lg rounded-lg h-[150px] w-[45%] mt-8 transform hover:scale-105 transition-transform duration-300">
          <div className="flex flex-row items-center gap-4 mt-4 mx-6">
            <FaHistory size={38} color="black" />
            <h2 className="font-bold text-3xl text-black">History</h2>
          </div>
          <p className="mt-6 mx-6 text-black">View past quiz attempts.</p>
        </div>
      </div>

      <div className="flex flex-row w-full gap-3">
        <div className="theme-bg-base shadow-lg rounded-lg h-[300px] w-[60%] mt-7 transform hover:scale-105 transition-transform duration-300">
          <div className="flex flex-row items-center gap-4 mt-4 mx-6">
            <LuBrainCircuit size={38} color="black" />
            <h2 className="font-bold text-3xl text-black">Topics</h2>
          </div>
          <p className="mt-6 mx-6 text-black">
            Challenge yourself with a quiz on a topic of your choice.
          </p>
        </div>

        <div className="ml-0 theme-bg-base shadow-lg rounded-lg h-[300px] w-[35%] mt-7 transform hover:scale-105 transition-transform duration-300">
          <div className="flex flex-row items-center gap-4 mt-4 mx-6">
            <h2 className="font-bold text-3xl text-black">Recent Activity</h2>
          </div>
          <p className="mt-6 mx-6 text-black"></p>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
