import React from "react";
import '../Skills/Skills.css'
import SkillsCarrusel from "./SkillsCarrusel";
import SkillCard from "./SkillCard";
import { allSkills } from "./Data/AllSkills.jsx";



const SkillsSection = () => {
  
  return (
    <section className="skills" id="skills">
       <h2 className="container__title">Tecnologías y Herramientas</h2>
        <h3 className="container__paragraph">
          Tengo conocimientos de diferentes herramientas las cuales he utilizado para el desarrollo de diferentes proyectos.
        </h3>

      <SkillsCarrusel />

      <div className="skills-grid">
          <SkillCard
            title="Frontend"
            description="Experiencia creando interfaces modernas y responsivas."
            skills={allSkills.slice(0, 6)}
          />
          <SkillCard
          title="Backend"
          description="Desarrollo de APIs y lógica del lado del servidor."
          skills={allSkills.slice(6, 10)}
          />
           <SkillCard
            title="Aprendiendo"
            description="Herramientas y tecnologías que estoy explorando actualmente."
            skills={allSkills.slice(10, 12)}
          />
           <SkillCard
            title="Herramientas"
            description="Software y plataformas que utilizo en mi flujo de trabajo."
            skills={allSkills.slice(12, 15)}
          />
      </div>
    </section>
  );
};

export default SkillsSection;
