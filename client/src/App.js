import React from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Component/Home';
import Dashboard from './Component/Dashboard'
import Contact from './Component/Contact';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import Navbar from './Component/Navbar';

// react Routes
 

 
function App() {
  return (
    <div>
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        </Routes> 

    </div>
  );
}

export default App;
