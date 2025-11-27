import React from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard';
import img1 from "../../assets/Imagen proyecto-venta.jpg";
import img2 from "../../assets/Imagen proyecto-Wanda.jpg";
import img3 from "../../assets/Imagen proyecto-to-do-list.png";
import img4 from "../../assets/Rick&MortyApp.jpg";


const Projects = () => {
  return (
    <div id="projects" className="projects-section">
        <h2 className="projects-section__title">Mis proyectos</h2>
        <p className="projects-section__description">
          Durante mi trayectoria profesional, he realizado diversos proyectos que han desafiado mis habilidades 
          y me han permitido crecer como profesional.
        </p>
        <div className="projects-grid">
          <ProjectCard img={img2} 
                       title="Tienda Shop" 
                       description="HTML5, CSS3, BOOTSTRAP, JAVASCRIPT" 
                       gitlink="https://github.com/JuCeMachado/Tierra-Colorada"
                       pagelink="https://landingpagewanda.netlify.app/"/>

          <ProjectCard img={img1} 
                       title="Tierra Colorada" 
                       description="HTML5, CSS3, JAVASCRIPT"
                       gitlink="https://github.com/samuelsolis02/ProyectoVenta"
                       pagelink=""/>

          <ProjectCard img={img3} 
                       title="To-Do list" 
                       description="HTML5, CSS3, JAVASCRIPT"
                       gitlink="https://github.com/JuCeMachado/To-Do-List"
                       pagelink="https://mi-listade.netlify.app/"/>
          <ProjectCard img={img4} 
                       title="Rick & Morty App" 
                       description="HTML5, CSS3, JAVASCRIPT, React, Bootstrap"
                       gitlink="https://github.com/JuCeMachado/Rick-Morty.git"
                       pagelink="https://rick-and-morty-apiproject.netlify.app/"/>
        </div> 
    </div>
  )
}

export default Projects
