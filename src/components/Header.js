import React, { useEffect } from 'react'
import backgroundImg from '../assets/mohammad-rahmani-8qEB0fTe9Vw-unsplash.webp'

function Header() {
  useEffect(() => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    const handleClick = () => {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('open');
    };

    const handleClickOutside = (event) => {
      if (navLinks.classList.contains('open') && 
      !navLinks.contains(event.target) && 
      !hamburger.contains(event.target)
    ) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
      }
    };
    
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', handleClick);
      document.addEventListener('click', handleClickOutside)
      return () => {
        hamburger.removeEventListener('click', handleClick);
        document.removeEventListener('click', handleClickOutside)
      };
    }
  }, []);
  return (
    <header id='home'>
      <img className='background' src={backgroundImg} alt='editeur de code sur pc portable'/>
      <div class="hamburger" id="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </div>
        <nav className='navLinks' id='navLinks'>
            <a href='#home'>Accueil</a>
            <a href='#about'>À propos</a>
            <a href='#skills'>Compétences</a>
            <a href='#portofolio'>Portofolio</a>
            <a href='#contactForm'>Contact</a>
        </nav>
      <div className='intro'>
        <h1 className='animate__animated animate__backInDown'>
          Hello ! <span className='wave'>👋</span><br />
          Je suis Antoine GROSJAT</h1>
        <p className='animate__animated animate__backInDown'>Intégrateur web junior</p>
        <a href='#about' className='button animate__animated animate__backInDown'>En savoir plus</a>
      </div>
      <div className='social animate__animated animate__backInDown'>
        <a href='https://github.com/Tons1212'><i class="fa-brands fa-github"></i></a>
        <a href='mailto:tons.gr@gmail.com'><i class="fa-solid fa-at"></i></a>
        <a href='https://www.linkedin.com/in/antoine-grosjat-4a0860329/'><i class="fa-brands fa-linkedin"></i></a>
      </div>  
    </header>
  )
}

export default Header
