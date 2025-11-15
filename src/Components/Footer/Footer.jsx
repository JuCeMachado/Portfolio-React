import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
            <div className="text-center">
              <div className="social-icon">
                <a href="http://www.linkedin.com/in/julio-cesar-machado-056985268" target="_blank" className="fab fa-linkedin" title="linkedIn"></a>
                <a href="https://github.com/JuCeMachado" target="_blank" className="fab fa-github" title="Github"></a>
                <a href="Cv_MachadoJulio.pdf" target="_blank" className="far fa-file" title="Curriculum"></a>
              </div>
              <p>©2025-Julio Machado</p>
            </div> 
        </div>
    </footer>
  )
}

export default Footer
