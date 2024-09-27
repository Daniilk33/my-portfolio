import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './components/Home'; 
import AboutDaniil from './components/AboutDaniil'; 
import Projects from './components/Projects'; 
import Services from './components/Services'; 
import Contact from './components/Contact'; 
import Navbar from './components/Navbar'; 
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Navbar for navigation */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page route */}
          <Route path="/aboutdaniil" element={<AboutDaniil/>} /> {/* About Me page route */}
          <Route path="/projects" element={<Projects />} /> {/* Projects page route */}
          <Route path="/services" element={<Services />} /> {/* Services page route */}
          <Route path="/contact" element={<Contact />} /> {/* Contact Me page route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;