import React from 'react';
import './Cards.css';

function Card({emoji,heading,details,skillsURL}) {
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{details}</span>
        <button className='c-button' href={skillsURL}>LEARN MORE</button>
    </div>
  )
}

export default Card;