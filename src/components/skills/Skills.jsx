import React from 'react';
import './Skills.css';
import Backend from '../../images/backend.png';
import Frontend from '../../images/frontend.jpg'
import Tester from '../../images/testing.png';
import Card from '../cards/Card';
import Resume from './Resume.pdf';

function Skills() {
  return (
    <div className="services">

        {/* left */}
        <div className="awesome">
           <span>My Awesome</span> 
           <span>Skills</span>
           <span>Over the years I have acquired and perfected 
             <br/>
             various Skills and Technologies</span>
             <a href={Resume} download >
             <button className="button s-button">Download CV</button>
             </a>
             <div className="blur s-blur1" 
             style={{
               background: "abf1ff94"
             }}></div>
        </div>

        {/* right side */}
        <div className="cards">
          <div style={{left:'14rem'}}>
            <Card
            emoji = {Backend}
            heading = {'Backend Development'}
            details = {"Backend Development using Djangoand Flask"}
            />
          </div>
          <div style={{top:"12rem", left:'-4rem'}}>
            <Card
            emoji = {Frontend}
            heading = {'Frontend Development'}
            details = {"React, Html, css, Javascript, Materialui,Bootstrap "}
            />
          </div>
          <div style={{top:"19rem", left:'12rem'}}>
            <Card
            emoji = {Tester}
            heading = {'Software Testing(Web)'}
            details = {"Cypress, python pytest,API Testing"}
            />
          </div>
          <div className="blur s-blur2" style={{
            background:'var(--purple)'
          }}></div>

        </div>

    </div>
  )
}

export default Skills