import React from 'react';
import '../styles/About.css';
import { useLocation, useNavigate } from 'react-router-dom';

function About() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="about_container">
        <span>“A JavaScript library for building user interfaces”</span> 
        <span>- React -</span>
    </div>
  )
}

export default About