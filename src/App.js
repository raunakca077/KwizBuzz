import SideBar from './Components/SideBar';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Quiz_Timing from './pages/Quiz_Timing';
import Quiz_Types from './pages/Quiz_Types';
import Question_Manager from './pages/Question_Manager';
import Basic_Settings from './pages/Basic_Settings';
import AddQuestionManually from './pages/AddQuestionManually';

import 'bootstrap/dist/css/bootstrap.min.css';

// import {QuestionGenerator} from './pages/QuestionGenerator';
// import {AddQuestionManually } from './pages/AddQuestionManually';

function App() {
  return (
    <BrowserRouter>
      <SideBar>
        <Routes>
            <Route path="/AddQuestionManually"element={<AddQuestionManually/>}/>
            <Route path="/Basic_Settings"element={<Basic_Settings/>}/>
            <Route path="/Question_Manager"element={<Question_Manager/>}/>
            <Route path="/Quiz_Timing"element={<Quiz_Timing/>}/>
            <Route path="/Quiz_Types"element={<Quiz_Types/>}/>

            <Route path="/Question_Manager" element={<Question_Manager />}/>
            {/* <Route path="generate" element={<QuestionGenerator />} />
            <Route path="add" element={<AddQuestionManually />} /> */}
        </Routes>
      </SideBar>
    </BrowserRouter>
  );
}
export default App;