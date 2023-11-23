import { Link } from 'react-router-dom';

const CustomButton = () => {
  return (
    <div className='theme-bg-base w-60 h-16 text-xl mt-3 rounded-md shadow-md'>
      <Link 
        className='text-black font-black flex items-center justify-center w-full h-full hover:text-green-500' 
        to={"/SignUp"}
      >
        Sign Up - it's free
      </Link>
    </div>
  );
}; 

export default CustomButton;
