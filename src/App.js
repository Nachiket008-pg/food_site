
import React from 'react';
import Home from './components/Home';
import Menu from './components/Menu';
import NavBar from './components/NavBar';
import {
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact'
import Signup from './components/SignUp';



function App() {
  return (
    <div className="App">
    
   <NavBar/>
    <Routes>
    
    
      <Route path="/" element={ <Home/> } />
      <Route path="menu" element={ <Menu/> } />
      <Route path="about" element={ <About/> } />
      <Route path="contact" element={ <Contact/> } />
      <Route path="signup" element={<Signup/>}/>
    </Routes>

  </div>
  );
}

export default App;
