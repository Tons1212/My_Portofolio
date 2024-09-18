import React from 'react'
import html from '../assets/HTML5_0_0.jpg'
import css from '../assets/css3.jpg'
import javascript from '../assets/javascript.jpg'
import react from '../assets/react.jpg'
import sass from '../assets/png-clipart-sass.png'
import node from '../assets/nodejs-image.jpg'
import mysql from '../assets/mysql.png'
import mongodb from '../assets/mongoDB.png'
import github from '../assets/github-logo.jpg'
import { useTranslation } from 'react-i18next'


function Skills() {
  const { t } = useTranslation();

  return (
    <div id='skills' className='skills'>
      <h2>{t("skills.title")}</h2>
      <h3>{t("skills.front")}</h3>
      <div className='logos'>
        <img src={html} alt='logo HTML'/>
        <img src={css} alt='logo CSS'/>
        <img src={javascript} alt='logo Javascript'/>
        <img src={react} alt='logo React'/>
        <img src={sass} alt='logo SASS'/>
      </div>
      <h3>{t("skills.back")}</h3>
      <div className='logos'>
        <img src={node} alt='logo Node'/>
        <img src={mysql} alt='logo MySQL'/>
        <img src={github} alt='logo Github'/>
        <img src={mongodb} alt='logo MongoDB'/>
      </div>
    </div>
  )
}

export default Skills
