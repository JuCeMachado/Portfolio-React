import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [status, setStatus] = useState("");   // "success", "error", "sending"
  const [message, setMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    // Evitar envíos repetidos
    if (status === "sending") return;

    setStatus("sending");
    setMessage("Enviando...");

    const formData = new FormData(event.target);
    formData.append("access_key", "3ce71903-0d08-4877-8bfd-cd45de23e348");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("WEB3FORMS RESPONSE:", data);

      if (data.success) {
        setStatus("success");
        setMessage("¡Mensaje enviado con éxito!");
        event.target.reset();
      } else {
        setStatus("error");
        setMessage("Hubo un error al enviar el mensaje.");
      }
    } catch {
      setStatus("error");
      setMessage("Error de conexión. Intenta de nuevo.");
    }

    // Ocultar mensaje después de 5s
    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <div className="contact__form-container">
      <h2>Envíame un mensaje</h2>

      <form onSubmit={onSubmit} className="contact__form">
        <div className="contact__container-input">
          <input
            className="contact__input"
            type="text"
            name="name"
            placeholder="Nombre"
            required
          />
        </div>

        <div className="contact__container-input">
          <input
            className="contact__input"
            type="email"
            name="email"
            placeholder="Correo"
            required
          />
        </div>

        <div className="contact__container-input">
          <textarea
            className="contact__textarea"
            name="message"
            placeholder="Mensaje"
            rows="6"
            required
          ></textarea>
        </div>

        <button className="contact__btn" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Enviando..." : "Enviar"}
        </button>
      </form>

      {/* Mensajes animados */}
      {status && (
        <div className={`form-alert ${status}`}>
          {status === "sending" && <span className="loader"></span>}
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
