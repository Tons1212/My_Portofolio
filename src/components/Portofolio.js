import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

function Portfolio() {
    const { t } = useTranslation();

    const [activeCard, setActiveCard] = useState(null);
    const cardRefs = useRef([]); // Ref pour stocker toutes les cartes

    const handleCardClick = (index) => {
        setActiveCard(prevIndex => (prevIndex === index ? null : index));
    };

    const handleClickOutside = (event) => {
        // Si une carte est active et que le clic est en dehors de celle-ci
        if (activeCard !== null && cardRefs.current[activeCard] && !cardRefs.current[activeCard].contains(event.target)) {
            setActiveCard(null); // Réinitialise l'état de la carte active
        }
    };

    useEffect(() => {
        if (activeCard !== null) {
            // Ajouter l'écouteur d'événement global quand une carte est active
            document.addEventListener('click', handleClickOutside);
        } else {
            // Supprimer l'écouteur d'événement quand aucune carte n'est active
            document.removeEventListener('click', handleClickOutside);
        }

        // Nettoyage de l'écouteur d'événement à la désactivation du composant
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeCard]);

    const projects = t('portofolio.projects', { returnObjects: true });

    return (
        <div id='portofolio' className='portofolio'>
            <h2>{t('portofolio.title')}</h2>
            <div className='cardContainer'>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`cards ${activeCard === index ? 'active' : ''}`}
                        onClick={() => handleCardClick(index)}
                        ref={(el) => (cardRefs.current[index] = el)} // Associer chaque carte à son ref
                    >
                        <div className="card-content">
                            <img src={project.image} alt={project.title} className='project-image' />
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <button className='button' onClick={(e) => { e.stopPropagation(); handleCardClick(index); }}>
                                {t("portofolio.viewMore")}
                            </button>
                        </div>
                        <div className="card-back">
                            <p>{t("portofolio.additionalInfo")}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;


