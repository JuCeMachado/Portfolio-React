import React from 'react'
import "./ContactCard.css"
import img1 from "../../assets/correo.png"
import img2 from "../../assets/enviar.png"

const ContactCard = () => {
  return (
    <div className="contact__container-image">
      <div className="card">
            <div className="card-inner">
              <div className="card-front container-image">
                 <img className="contact__image" src={img1} alt="" />
              </div>
              <div className="card-back">
                <img className="contact__image" src={img2} alt="" />
              </div>
            </div>
          </div>
    </div>
  )
}

export default ContactCard
