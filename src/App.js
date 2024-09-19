import React, { useState, useEffect } from 'react';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Header from './components/Header';
import Portofolio from './components/Portofolio';
import Skills from './components/Skills';
import Loader from './components/Loader';
import './main.scss';


function App() {
  const [loading, setLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setContentVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={`fade-in ${contentVisible ? 'fade-in-active' : ''}`}>
          <Header />
          <About />
          <Skills />
          <Portofolio />
          <ContactForm />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;


