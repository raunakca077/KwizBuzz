import React from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Component/Home';
import Dashboard from './Component/Dashboard'
import Contact from './Component/Contact';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import Navbar from './Component/Navbar';
import CreateQuiz from './Component/CreateQuiz';
// import AddQuestionManually from './Pages/src/pages/AddQuestionManually';
// import BasicSettings from './Pages/src/pages/BasicSettings';
// import QuestionManager from './Pages/src/pages/QuestionManager';
// import QuizTiming from './Pages/src/pages/QuizTiming';
// import QuizTypes from './Pages/src/pages/QuizTypes';
// import QuizPortal from './Pages/QuizPortal';
import Admin from './Component/Admin';
// react Routes
 

 
function App() {
  return (
    <div>
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Dashboard/*" element={<Dashboard/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/CreateQuiz" element={<CreateQuiz/>}/>
        <Route path="/AddQuestionManually" element={<AddQuestionManually/>}/>
        <Route path="/BasicSettings"element={<BasicSettings/>}/>
        <Route path="/QuestionManager"element={<QuestionManager/>}/>
       <Route path="/QuizTiming"element={<QuizTiming/>}/>
       <Route path="/QuizTypes"element={<QuizTypes/>}/>
       <Route path="/QuizPortal" element={<QuizPortal/>}/>
       <Route path="/Admin" element={<Admin/>}/>

        </Routes> 
    </div>
  );
}


export default App;
