import React from 'react';
import './Intro.css';
import Vector1 from "../../images/Vector1.png";
import Vector2 from "../../images/Vector2.png";
import boy from "../../images/boy.png";
import glassesimoji from "../../images/glassesimoji.png";
import thumbup from "../../images/thumbup.png";
import crown from "../../images/crown.png";
import Github from "../../images/github.png";
import Linkedin from "../../images/linkedin.png";
import Instagram from "../../images/instagram.png";
import FloatingDiv from '../floatindiv/FloatingDiv';

function Intro() {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hey! I Am</span>
                <span>Kihara Njoroge</span>
                <span>Fullstack Developer with high level of experience 
                    in web development. Proficient in both Frontend and Backend.
                </span>
            </div>
            <button className="button i-button">
                Hire Me
            </button>
            <div className="i-icons">
                <a href="https://github.com/Babuuh">
                <img src={Github} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/kihara-njoroge-9367251bb/">
                <img src={Linkedin} alt="" />
                </a>
                <a href="https://twitter.com/kiharanjoroge1 ">
                <img src={Instagram} alt="" />
                </a>
            </div>
        </div>
        <div className="i-right">
           <img src={Vector1} alt="" />
           <img src={Vector2} alt="" />
           <img src={boy} alt="" />
           <img src={glassesimoji} alt="" />
           <div style={{top:'-4%', left:'68%'}}>
               <FloatingDiv image={crown} text1='Frontend' text2='Engineer'/>
           </div>
           <div style={{top:'18rem', left:'1rem'}}>
               <FloatingDiv image={thumbup} text1='Backend' text2='Engineer'/>
           </div>

           {/* blur divs */}
           <div className="blur" style={{background:"rgb(238 210 255)"}}>
            <div className="blur"
            style={{
                background:'#c1f5ff',
                top:'17rem',
                width: '21rem',
                heigth: '11rem',
                left: '-9rem'
            }}></div>
           </div>
        </div>
    </div>
  )
}

export default Intro