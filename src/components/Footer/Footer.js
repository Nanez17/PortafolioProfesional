import React from "react";
import "./Footer.css";
import logo from "../../assets/favicon.ico.png";

function Footer() {
  return (
    <footer className="main-footer">
      <img src={logo} alt="Logo" className="footer-logo" />
      <p>Desarrollado por Sebastián López</p>
      <p>Email: slopezo1@ucenfotec.ac.cr | Tel: +506 8964-8382</p>
    </footer>
  );
}

export default Footer;

