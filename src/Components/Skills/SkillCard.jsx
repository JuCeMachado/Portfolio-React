import React from 'react'
import './SkillCard.css';
import SkillIcon from './SkillIcon';


const SkillCard = ({ title, description, skills }) => {
  return (
    <article className="skill-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="skill-icon">
        {skills.map((skill, index) => (
          <div key={index} className="skill-icon" title={skill.label}>
            {skill.svg}
          </div>
        ))}
      </div>
    </article>
  );
};

export default SkillCard;
