import React from "react";
import "./Skills.css";

function Skills({ lang }) {
  const skills = [
    {
      name: "HTML5",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React JS",
      url: "https://reactjs.org/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Bootstrap 5",
      url: "https://getbootstrap.com/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
    },
    {
      name: "Git & GitHub",
      url: "https://github.com/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Java",
      url: "https://www.oracle.com/java/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "Spring Boot",
      url: "https://spring.io/projects/spring-boot",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    },
    {
      name: "MySQL",
      url: "https://www.mysql.com/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
  ];

  return (
    <section className="skills-section">
      <h2>{lang === "es" ? "Habilidades Técnicas" : "Technical Skills"}</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill">
            <a href={skill.url} target="_blank" rel="noopener noreferrer">
              <img src={skill.img} alt={skill.name} className="skill-icon" />
              <span>{skill.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
