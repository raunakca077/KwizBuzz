import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import SideBar from './Components/SideBar';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import Contact from './Components/Contact';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Admin from './Components/Admin';
import CreateQuiz from './Components/CreateQuiz';
import QuizPortal from './pages/QuizPortal';
import AnswerSheetPanel from './pages/AnswerSheetPanel';
import Basic_Settings from './pages/Basic_Settings';
import Question_Manager from './pages/Question_Manager';
import AddQuestionManually from './pages/AddQuestionManually';
import Quiz_Timing from './pages/Quiz_Timing';
import Quiz_Types from './pages/Quiz_Types';
import About from './Components/About';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Dashboard/*" element={<Dashboard />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/CreateQuiz" element={<CreateQuiz />} />
          <Route path="/Admin" element={<Admin />} />
        </Routes>

        <Routes>
          <Route path="/QuizPortal" element={<QuizPortal />} />
          <Route path="/AnswerSheetPanel" element={<AnswerSheetPanel />} />
        </Routes>

        {/* <SideBar> */}
          <Routes>
            <Route path="/Basic_Settings" element={<Basic_Settings />} />
            <Route path="/Question_Manager" element={<Question_Manager />} />
            <Route path="/AddQuestionManually" element={<AddQuestionManually />} />
            <Route path="/Quiz_Timing" element={<Quiz_Timing />} />
            <Route path="/Quiz_Types" element={<Quiz_Types />} />
          </Routes>
        {/* </SideBar> */}
      </div>
    </Router>
  );
}
export default App;
