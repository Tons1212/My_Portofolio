import React, { useState, useEffect } from 'react';

function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 10); // Augmente la progression de 1% toutes les 50 ms

    // Redirige une fois le chargement terminé
    if (progress === 100) {
      setTimeout(() => {
        window.location.hash = '#home'; // Remplace par l'URL ou route où tu veux rediriger
      }, 500); // Un délai pour voir la barre atteindre 100%
    }

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="loader-container">
      <div className="loading-text">Chargement...</div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="progress-percentage">{progress}%</div>
    </div>
  );
}

export default Loader;


