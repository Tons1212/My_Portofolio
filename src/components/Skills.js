import React from 'react'
import html from '../assets/html-5.png'
import css from '../assets/css.png'
import javascript from '../assets/script-java.png'
import react from '../assets/react.jpg'
import sass from '../assets/png-clipart-sass.png'
import node from '../assets/node.png'
import mysql from '../assets/mysql.png'
import mongodb from '../assets/mongoDB.png'



function Skills() {
  return (
    <div className='skills'>
      <h2>Compétences</h2>
      <h3>Front-end</h3>
      <div className='logos'>
        <img src={html} alt='logo HTML'/>
        <img src={css} alt='logo CSS'/>
        <img src={javascript} alt='logo Javascript'/>
        <img src={react} alt='logo React'/>
        <img src={sass} alt='logo SASS'/>
      </div>
      <h3>Back-end</h3>
      <div className='logos'>
        <img src={node} alt='logo Node'/>
        <img src={mysql} alt='logo MySQL'/>
        <img src={mongodb} alt='logo MongoDB'/>
      </div>
    </div>
  )
}

export default Skills
