import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './shop.jsx'
import Counter from './counter.jsx'
import Box from './box.jsx'
import Fullbox from './fullbox.jsx'

// const data=[
//   {
//     item:"apple",
//     qty:6,
//     status:false
//   },
//   {
//     item:"mango",
//     qty:7,
//     status:true
//   },
//   {
//     item:"banana",
//     qty:676,
//     status:false
//   },
// ];


const color=
[
  "red","blue","green","yellow","violet","black","lime","magenta"
]

function App() {
 return(

  // <div>
  //       <Fullbox colors={color}/>
  //     </div>

      <div>
        <Counter/>
      </div>


  // <div>
  //      <List items={data}/>
  // </div>
 )
}

export default App
