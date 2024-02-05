import { useState } from "react"


const counter=()=>
{const [cnt,setCnt]=useState(0)
    return(
        <button onClick={()=>{setCnt(c=>c+1)}}>count:{cnt}</button>
    )
}
export default counter