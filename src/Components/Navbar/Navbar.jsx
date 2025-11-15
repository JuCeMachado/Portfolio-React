import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("inicio");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll para ocultar header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Cambia el umbral según tu diseño
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar el menú al hacer click en un link
  const handleNavClick = (section) => {
    setMenu(section);
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? "header--hidden" : ""}`}>
      {/* Logo */}
      <a href="#inicio" className="logo" aria-label="Inicio - Julio.M">
        Julio.M
      </a>

      {/* Navegación */}
      <nav className={`navbar ${isMenuOpen ? "navbar--open" : ""}`} id="mainNav">
        <a
          href="#inicio"
          onClick={() => handleNavClick("inicio")}
          className={menu === "inicio" ? "active" : ""}
        >
          Inicio
        </a>
        <a
          href="#projects"
          onClick={() => handleNavClick("projects")}
          className={menu === "projects" ? "active" : ""}
        >
          Proyectos
        </a>
        <a
          href="#skills"
          onClick={() => handleNavClick("skills")}
          className={menu === "skills" ? "active" : ""}
        >
          Habilidades
        </a>
        <a
          href="#contact"
          onClick={() => handleNavClick("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          Contactar
        </a>
      </nav>

      {/* Botón toggle */}
      <button
        className="header__icon"
        aria-label="Menú"
        aria-expanded={isMenuOpen}
        aria-controls="mainNav"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <i className={`bi ${isMenuOpen ? "bi-x" : "bi-list"}`}></i>
      </button>
    </header>
  );
};

export default Navbar;
