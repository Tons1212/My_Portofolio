import React from 'react'
import projects from '../datas/projectData.json'

function Portofolio() {
    return (
        <div className='portofolio'>
          {projects.map((project, index) => (
            <div key={index} className='cards'>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className='button'>Voir plus</a>
            </div>
          ))}
        </div>
      );
    };

export default Portofolio
