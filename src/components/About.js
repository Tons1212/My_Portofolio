import React from 'react'
import { useTranslation } from 'react-i18next';
import selfie from '../assets/bibi.jpg'

function About() {
  const { t } = useTranslation();

  return (
    <section id='about' className='about'>
      <h2>{t('about.title')}</h2>
      <div className='presentation'>
        <img src={selfie} alt='profile Antoine GROSJAT'/>
        <p>{t('about.text')}<br />
          <br />{t('about.text1')}</p>
      </div>
    </section>
  )
}

export default About
