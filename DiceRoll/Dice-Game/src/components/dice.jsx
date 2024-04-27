import Heading from "./heading";
import { Die } from "./die";
let i=1
export const Dice=({arr})=>
{
    return <div className="flex justify-items-center ">
                {/* <Heading title="Player"/> */}
        {arr.map((x,i)=>{ return <Die key={i} val={x}/>})}
    </div>
}
