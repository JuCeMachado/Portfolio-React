import React from 'react'
import "./Contact.css"
import ContactCard from './ContactCard'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div  id="contact" className="contact">
     <ContactCard />
      <ContactForm />
    </div>
  )
}

export default Contact
