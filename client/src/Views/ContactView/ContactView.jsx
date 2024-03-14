// ContactForm.js

import React, { useState } from 'react';
import './ContactView.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    apellido: '',
    numero_de_telefono: '',
    email: '',
    donde_vives: '',
    que_te_interesa: '',
    message: '',
    confirmacion: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    validateField(e.target.name, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.confirmacion) {
      setErrors({ confirmacion: 'Debes aceptar la Política de privacidad' });
      return;
    }

    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      console.log('Formulario enviado:', formData);
    } else {
      setErrors(formErrors);
    }
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.name.trim()) {
      formErrors.name = 'El nombre es obligatorio';
    }

    if (!formData.apellido.trim()) {
      formErrors.apellido = 'El apellido es obligatorio';
    }

    if (!formData.numero_de_telefono.trim()) {
      formErrors.numero_de_telefono = 'El número de teléfono es obligatorio';
    }

    return formErrors;
  };

  const validateField = (fieldName, value) => {
    let fieldErrors = {};

    switch (fieldName) {
      case 'name':
        if (!value.trim()) {
          fieldErrors.name = 'El nombre es obligatorio';
        }
        break;
      default:
        break;
    }

    setErrors({ ...errors, [fieldName]: fieldErrors });
  };

  return (
    <main className="contact-container">
      <img src="contactImage" alt="Imagen de contacto" />

      <main className="orange-rectangle">
        <h2>¡Queremos conocerte!</h2>
      </main>

      <aside className="content-wrap">
        <main className="ubicacion">
          <div className="encabezado-ubicacion">
            <h3>¡Aquí estamos!</h3>
          </div>
          <p>
            <h4>Barcelona</h4>
            Avinguda Bogatell, 82
            08005 Barcelona
            <br></br>
            info@factoriaf5.org
            <br></br>
            <h4>Madrid</h4>
            C. Fernando Poo, 25
            28045 Madrid
            <br></br>
            madrid@factoriaf5.org
            <h4>Langreo</h4>
            Calle Hornos Altos, s/n
            33949 Asturias
            <br></br>
            asturias@factoriaf5.org
          </p>
          <p>
            Síguenos en:
            <br></br>
            <img></img>
          </p>
        </main>

        <main className="contact-form-container">
          <p className="comentario-formulario">
            Si necesitas más información, rellena el siguiente formulario de contacto y te responderemos lo antes posible.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <article>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Nombre"
              />

              <input
                type="text"
                id="apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                required
                placeholder="Apellido"
              />

              <input
                type="text"
                id="numero_de_telefono"
                name="numero_de_telefono"
                value={formData.numero_de_telefono}
                onChange={handleChange}
                required
                placeholder="Número de teléfono"
              />

              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email"
              />

              <input
                type="text"
                id="donde_vives"
                name="donde_vives"
                value={formData.donde_vives}
                onChange={handleChange}
                required
                placeholder="¿Dónde vives?"
              />

              <input
                type="text"
                id="que_te_interesa"
                name="que_te_interesa"
                value={formData.que_te_interesa}
                onChange={handleChange}
                required
                placeholder="¿Qué te interesa?"
              />

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Message"
              ></textarea>

              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="confirmacion"
                  name="confirmacion"
                  checked={formData.confirmacion}
                  onChange={(e) => setFormData({ ...formData, confirmacion: e.target.checked })}
                />
                <label htmlFor="confirmacion">He leído y acepto la Política de privacidad.</label>
              </div>

              <section className="boton-contacto-container">
                <button className="boton-contacto" type="submit">
                  Enviar
                </button>
              </section>
            </article>
          </form>
        </main>
      </aside>
    </main>
  );
};

export default ContactForm;
