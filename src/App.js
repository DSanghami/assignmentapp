// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Registration from './Registration';
import Contact from './Contact';
import './App.css';


function App() {
  return (
    
    <Router>
      <div className="App">
        <Routes>
          <Route  path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Registration" element = {<Registration />} />
          <Route path="/Contact" element = {<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
