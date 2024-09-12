import React from 'react'
import backgroundImg from '../assets/mohammad-rahmani-8qEB0fTe9Vw-unsplash.webp'

function Header() {
  return (
    <header>
      <img src={backgroundImg} alt='editeur de code sur pc portable'/>
        <nav className='navLinks'>
            <a href=''>Accueil</a>
            <a href=''>À propos</a>
            <a href=''>Compétences</a>
            <a href=''>Portofolio</a>
            <a href='#contactForm'>Contact</a>
        </nav>
      <div className='intro'>
        <h1>Bonjour ! Je suis Antoine GROSJAT</h1>
        <h2>Intégrateur web junior</h2>
        <button>En savoir plus</button>
      </div>  
    </header>
  )
}

export default Header
