import React from 'react'
import selfie from '../assets/bibi.jpg'

function About() {
  return (
    <section id='about' className='about'>
      <h2>À propos de moi</h2>
      <div className='presentation'>
        <img src={selfie} alt='profile Antoine GROSJAT'/>
        <p>Bonjour ! Je m'appelle Antoine GROSJAT et je suis un intégrateur web 
          junior passionné par la création de sites web interactifs et esthétiques. 
          Avec une solide formation suivie chez Openclassrooms en 2023/2024 en HTML, 
          CSS et JavaScript, je suis dédié à transformer des concepts visuels en 
          expériences utilisateur engageantes et fonctionnelles.<br />
          <br />Je suis passionné par le développement web et toujours à la recherche de nouvelles opportunités
          pour apprendre et évoluer. Mon objectif est de continuer à améliorer mes 
          compétences, d'explorer de nouvelles technologies, et de contribuer à des 
          projets stimulants qui repoussent les limites du design web.</p>
      </div>
    </section>
  )
}

export default About
