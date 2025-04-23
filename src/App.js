import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Mission from "./components/Mission/Mission";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import "./ScrollTop.css"; // Estilos del botón scroll top

function App() {
  const [lang, setLang] = useState("es");

  const toggleLanguage = () => {
    setLang(lang === "es" ? "en" : "es");
  };

  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    setShowScroll(scrollTop > 300); // Mostrar después de 300px
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header toggleLanguage={toggleLanguage} currentLang={lang} />
      <main>
        <section id="about"><About lang={lang} /></section>
        <section id="skills"><Skills lang={lang} /></section>
        <section id="mission"><Mission lang={lang} /></section>
        <section id="projects"><Projects lang={lang} /></section>
        <section id="contact"><Contact lang={lang} /></section>
      </main>
      <Footer />

      {showScroll && (
        <button className="scroll-top-btn" onClick={scrollToTop}>
          ↑
        </button>
      )}

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/50689648382?text=Hola%20Sebastián%2C%20vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
          alt="WhatsApp"
          className="whatsapp-icon"
        />
      </a>
    </>
  );
}

export default App;
