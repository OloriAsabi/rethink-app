import React from 'react';
import { 
  BrowserRouter as
   Router, 
   Routes, 
   Route } from "react-router-dom";
import Navbar from './component/Navbar';
import About from "./component/About";
import Home from "./component/Home";
import Service from "./component/Service";
import Login  from "./component/Login";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />  
        <Route path='/' element={<Service/>} />
        <Route path='/' element={<About/>} />
        <Route path='/' element={<Login/>} />
        <Route>404 Not Found!</Route>
        </Routes>
   
      
    </Router>
  )
}

export default App;
