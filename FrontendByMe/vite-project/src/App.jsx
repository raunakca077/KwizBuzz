import Heading from "./components/heading";
import {Signup} from "./components/signup";  //curly braces tab use karenge jab default export use nai karenge 


function App(){
  return<div className="flex items-center justify-center h-screen"> 
  <div className="flex-row  ">
  <Heading title={"SignUp"}/>
  <Signup/>
  </div>
 
</div>
}
export default App
