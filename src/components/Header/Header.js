import React from "react";
import "./Header.css";
import logo from "../../assets/favicon.ico.png";

function Header({ toggleLanguage, currentLang }) {
  const content = {
    es: {
      about: "Sobre mí",
      skills: "Habilidades",
      mission: "Valores",
      projects: "Proyectos",
      contact: "Contacto",
    },
    en: {
      about: "About",
      skills: "Skills",
      mission: "Values",
      projects: "Projects",
      contact: "Contact",
    },
  };

  return (
    <header className="main-header">
      <img src={logo} alt="Logo" className="header-logo" />
      <nav className="nav-links">
        <a href="#about">{content[currentLang].about}</a>
        <a href="#skills">{content[currentLang].skills}</a>
        <a href="#mission">{content[currentLang].mission}</a>
        <a href="#projects">{content[currentLang].projects}</a>
        <a href="#contact">{content[currentLang].contact}</a>
      </nav>
      <button onClick={toggleLanguage} className="lang-toggle">
        {currentLang === "es" ? "EN" : "ES"}
      </button>
    </header>
  );
}

export default Header;
