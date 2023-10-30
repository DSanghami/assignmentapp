import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserDetails from './Registration';
import Registration from './Registration';
import { Link } from 'react-router-dom';

function Home() {
    return (
      
        <div >
   <Link to ="/Home" className='a'>Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
        <Link to = "/Registration" className='a'>Registration</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to = "/Contact" className='a'>Contact</Link>
        
</div>
    );
  }
  
  export default Home;