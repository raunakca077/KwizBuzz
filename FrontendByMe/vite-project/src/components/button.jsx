export default function Button({send,label})         
{
    return (
        <>
       <button onClick={send} className="relative w-[400px] h-[30px] ml-10 bg-red-500 text-[16px] hover:bg-blue-900 text-[#fff] cursor-pointer rounded-xl"
 type="submit">{label}</button>
        </>
    )
}