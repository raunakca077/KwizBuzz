import '../App.css'
export const Die=({val,onPress})=>
{
    return <div className="shadow-2xl shadow-blue-900 rounded-3xl border-4 border-black border-double active:animate-spin-slow hover:animate-none hover:border-dotted cursor-grab motion-safe:animate-bounce text-3xl font-bold items-center m-5 size-20  bg-[#34d399] flex justify-center">
            {val}
            </div>
    
}