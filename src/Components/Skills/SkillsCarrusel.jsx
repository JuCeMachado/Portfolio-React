import React from 'react'
import './SkillsCarrusel.css';

const SkillsCarrusel = () => {
  return (
    <div className="skills-section-header">
       <div className="tag-list">
          <div className="inner">
            <div className="tag"><span>#</span>HTML5</div>
            <div className="tag"><span>#</span>CSS</div>
            <div className="tag"><span>#</span>JavaScript</div>
            <div className="tag"><span>#</span>TypeScript</div>
            <div className="tag"><span>#</span>React</div>
            <div className="tag"><span>#</span>Node</div>
            <div className="tag"><span>#</span>Git</div>

            {/*<!-- Duplicados -->*/}
            <div className="tag"><span>#</span>Postman</div>
            <div className="tag"><span>#</span>Redux</div>
            <div className="tag"><span>#</span>PostgreSQL</div>
            <div className="tag"><span>#</span>Express</div>
            <div className="tag"><span>#</span>React</div>
            <div className="tag"><span>#</span>Node</div>
            <div className="tag"><span>#</span>Git</div>
          </div>
        </div>
    </div>
  )
}

export default SkillsCarrusel
