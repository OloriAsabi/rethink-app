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
        <Route path='/rethink-app' exact element={<Home/>} />  
        <Route path='/rethink-app' element={<Service/>} />
        <Route path='/rethink-app' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route>404 Not Found!</Route>
        </Routes>
   
      
    </Router>
  )
}

export default App;
