import React from 'react'
import './SkillIcon.css';

const SkillIcon = ({ children, label }) => {
  return (
    <div className="skill-icon icons" title={label}>
       {children}
    </div>
  );
};

export default SkillIcon;
