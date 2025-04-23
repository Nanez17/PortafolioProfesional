import React from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    name: "EventWizz",
    image: require("../../assets/WizzEvent.jpg"),
    url: "https://github.com/Nanez17/ProyectoTiqueteriaWizzEvent",
  },
  {
    id: 2,
    name: "Novacentro backend",
    image: require("../../assets/Novacentro backend.jpg"),
    url: "https://github.com/Nanez17/Novacentro-backend",
  },
  {
    id: 3,
    name: "Novacentro frontend",
    image: require("../../assets/Novacentro frontend.jpg"),
    url: "https://github.com/Nanez17/Novacentro-frontend",
  },
  {
    id: 4,
    name: "Cenfoteco-Kingdom",
    image: require("../../assets/Cenfoteco-Kingdoms.jpg"),
    url: "https://github.com/Nanez17/Cenfoteco-Kingdom",
  },
];

const Projects = ({ lang }) => {
  return (
    <section id="projects" className="projects-section">
      <h2>{lang === "es" ? "Mis Proyectos" : "My Projects"}</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            {project.image && <img src={project.image} alt={project.name} />}
            <h3>{project.name}</h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
