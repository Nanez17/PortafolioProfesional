import React from "react";
import "./About.css";

const About = ({ lang }) => {
  const content = {
    es: {
      title: "Sobre Mí",
      description: "Ingeniero de Software especializado en el desarrollo web Back-End con experiencia en HTML, SCSS, C#, React, Springboot y Bootstrap y manejo de bases de datos relacionales como MySQL. He desarrollado varios proyectos importantes en la Universidad enfocados en Front-End, Back-end y FullStack.",
    },
    en: {
      title: "About Me",
      description: "Software Engineer specialized in Back-End web development with experience in HTML, SCSS, C#, React, Springboot, and Bootstrap, as well as relational databases like MySQL. I have developed several major projects at university focused on Front-End, Back-End, and FullStack.",
    },
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>{content[lang].title}</h2>
        <p>{content[lang].description}</p>
        <div className="about-buttons">
          <a
            href={lang === "es" ? "/CV_Sebastian_Lopez_ES.pdf" : "/CV_Sebastian_Lopez_EN.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn"
          >
            {lang === "es" ? "Ver CV" : "View CV"}
          </a>
          <a
            href="https://www.linkedin.com/in/sebasti%C3%A1n-l%C3%B3pez-ocampo-46b894248/"
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Nanez17"
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
