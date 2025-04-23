import React, { useState } from "react";
import "./Contact.css";

const Contact = ({ lang }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const content = {
    es: {
      title: "Contacto",
      namePlaceholder: "Tu Nombre",
      emailPlaceholder: "Tu Correo",
      messagePlaceholder: "Tu Mensaje",
      send: "Enviar",
      nameError: "Solo se permiten letras.",
      emailError: "Correo inválido.",
      requiredError: "Este campo es obligatorio.",
    },
    en: {
      title: "Contact",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Your Message",
      send: "Send",
      nameError: "Only letters are allowed.",
      emailError: "Invalid email.",
      requiredError: "This field is required.",
    },
  };

  const validate = (field, value) => {
    if (!value) return content[lang].requiredError;

    if (field === "name" && !/^[a-zA-Z\s]+$/.test(value))
      return content[lang].nameError;

    if (field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      return content[lang].emailError;

    return null;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (touched[name]) {
      setErrors({ ...errors, [name]: validate(name, value) });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    setErrors({ ...errors, [name]: validate(name, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(form).forEach((field) => {
      const error = validate(field, form[field]);
      if (error) newErrors[field] = error;
    });

    if (Object.keys(newErrors).length === 0) {
      alert(`${lang === "es" ? "Mensaje enviado por" : "Message sent by"} ${form.name}`);
      setForm({ name: "", email: "", message: "" });
      setTouched({});
      setErrors({});
    } else {
      setErrors(newErrors);
      setTouched({
        name: true,
        email: true,
        message: true,
      });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2>{content[lang].title}</h2>
      <form onSubmit={handleSubmit} noValidate>
        {["name", "email", "message"].map((field) => (
          <div className={`input-group ${errors[field] ? "error" : ""}`} key={field}>
            <label htmlFor={field}>
              {field === "name"
                ? content[lang].namePlaceholder
                : field === "email"
                ? content[lang].emailPlaceholder
                : content[lang].messagePlaceholder}
            </label>
            {field !== "message" ? (
              <input
                type={field === "email" ? "email" : "text"}
                id={field}
                name={field}
                value={form[field]}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
            ) : (
              <textarea
                id={field}
                name={field}
                value={form[field]}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
            )}
            {touched[field] && !errors[field] && (
              <span className="check">✔</span>
            )}
            {touched[field] && errors[field] && (
              <span className="error-message">{errors[field]}</span>
            )}
          </div>
        ))}
        <button type="submit">{content[lang].send}</button>
      </form>
    </section>
  );
};

export default Contact;
