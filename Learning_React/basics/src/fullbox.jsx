import Box from './box.jsx'
import "./style.css"
import { useState } from "react"

export default function fullbox({colors})
{
    
    let pt=()=>(Math.floor(Math.random()*colors.length))
    
    const matrix=[];
    for(let i=0;i<36;i++)
    {
        const [clr,setClr]=useState(colors[pt()])
            matrix.push(<div onClick={()=>{setClr(colors[pt()])}}><Box color={clr}/></div>)
        
    }
    return (
        <div class="mat">
            {matrix}
        </div>
    )
}