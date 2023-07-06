import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/Home"
import Profile from "./components/Profile"
import Search from "./components/Search"
import About from "./components/About"
import Support from "./components/Support"
import SignUP from "./components/SignUP";
import login from "./components/login";



const App= () => {

 
 

  return (
    
      
   <Router>
   
    
 <Routes>

  <Route path="/" element={<Home />} />
  <Route path="/Profile" element={<Profile />} />
  <Route path="/Search" element={<Search />}/>
  <Route path="/About" element={<About />} />
  <Route path="/Support" element={<Support />}/>
  <Route path="/SignUP" Component={SignUP} />
  <Route exact path = "/login" Component={login }/>
  
 </Routes>
 

 </Router>
 
  );
  
}


  

export default App;
