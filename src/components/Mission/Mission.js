import React, { useState } from "react";
import "./Mission.css";

const Mission = ({ lang }) => {
  const [position, setPosition] = useState({ x: "50%", y: "50%" });

  const content = {
    es: {
      title: "Misión y Valores",
      mission: "Nuestra misión es innovar y ofrecer soluciones tecnológicas de calidad.",
      values: "Valores: Compromiso, creatividad, responsabilidad y excelencia.",
    },
    en: {
      title: "Mission and Values",
      mission: "Our mission is to innovate and offer high-quality tech solutions.",
      values: "Values: Commitment, creativity, responsibility, and excellence.",
    },
  };

  const handleMouseMove = (e) => {
    setPosition({
      x: `${e.clientX}px`,
      y: `${e.clientY}px`,
    });
  };

  return (
    <section id="mission" className="mission-section" onMouseMove={handleMouseMove}>
      <h2>{content[lang].title}</h2>
      <p>{content[lang].mission}</p>
      <p>{content[lang].values}</p>
      <div
        className="highlight"
        style={{ left: position.x, top: position.y }}
      ></div>
    </section>
  );
};

export default Mission;
