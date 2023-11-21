import SideBar from './Components/SideBar';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Quiz_Timing from './pages/Quiz_Timing';
import Quiz_Types from './pages/Quiz_Types';
import Question_Manager from './pages/Question_Manager';
import Basic_Settings from './pages/Basic_Settings';
import AddQuestionManually from './pages/AddQuestionManually';
import 'bootstrap/dist/css/bootstrap.min.css';

import QuizPortal from './pages/QuizPortal';

// import {QuestionGenerator} from './pages/QuestionGenerator';
// import {AddQuestionManually } from './pages/AddQuestionManually';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/QuizPortal" element={<QuizPortal/>}/>
      </Routes>

      <SideBar>
        <Routes>
            <Route path="/Basic_Settings"element={<Basic_Settings/>}/>

            <Route path="/Question_Manager"element={<Question_Manager/>}/>
            <Route path="/AddQuestionManually"element={<AddQuestionManually/>}/>

            <Route path="/Quiz_Timing"element={<Quiz_Timing/>}/>
            <Route path="/Quiz_Types"element={<Quiz_Types/>}/>

            {/* <Route path="generate" element={<QuestionGenerator />} />
            <Route path="add" element={<AddQuestionManually />} /> */}
        </Routes>
      </SideBar>
    </BrowserRouter>
  );
}
export default App;