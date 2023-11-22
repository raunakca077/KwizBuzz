
import React from 'react';
import SS1 from './assets/SS1.png'; // Import the image
import SS2 from './assets/SS2.png'; // Import the second image

const Images = () => {
  return (
    <div className='relative w-full h-full '>
      <img src={SS1} alt='SS1' className='absolute h-72 rotate-7 -top-16 -left-16
       shadow-md shadow-white rounded-md' />
      <img src={SS2} alt='SS2' className='absolute h-72 -rotate-8 -top-12 -left-12 
      shadow-md shadow-white rounded-md' />
    </div>
  );
};

export default Images;

