import { Link } from 'react-router-dom';

const CustomButton = () => {
  return (
    <div className='text-[#014751] bg-[#ffeeb4] w-60 h-16 text-xl mt-3 font-bold rounded-md shadow-md'>
      <Link className='flex items-center justify-center w-full h-full ' to={"/SignUp"}>
        Sign Up - it's free
      </Link>
    </div>
  );
}; 

export default CustomButton;
