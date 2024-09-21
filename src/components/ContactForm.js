import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
    objet: '',
    message: ''
  });

  const [status, setStatus] = useState(''); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://formspree.io/f/mzzpqekg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('Votre message a bien été envoyé !');
      setFormData({
        nom: '',
        prenom: '',
        telephone: '',
        email: '',
        objet: '',
        message: ''
      });
    } else {
      setStatus('Une erreur est survenue lors de l\'envoi.');
    }
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus('');
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <>
    <div className='contactText'>
    <h2>{t("contact.title")}</h2>
    <p>{t("contact.text")}</p>
    </div>
    <form id='contactForm' className='contactForm' onSubmit={handleSubmit}>
      <div className='formGroup'>
        <label>
        {t("contact.name")}
          <input type="text" name="nom" value={formData.nom} onChange={handleChange} required />
        </label>
        <br />
        <span><label>
        {t("contact.mail")}
          <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} required />
        </label></span>
        <br />
      </div>
      <div className='formGroup'>
        <label>
        {t("contact.firstName")}
          <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} required />
        </label>
        <br />
        <span><label>
        {t("contact.phone")}
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label></span>
        <br />
      </div>
      <label>
      {t("contact.object")}
        <input type="text" name="objet" value={formData.objet} onChange={handleChange} required />
      </label>
      <br />
      <label>
      {t("contact.message")}
        <textarea name="message" value={formData.message} onChange={handleChange} required />
      </label>
      <br />
      <button type="submit">{t("contact.submit")}</button>
      {status && <p>{status}</p>}
      <div className='contactDetails'>
        <div className='contactItem'>
          <i class="fa-solid fa-at"></i><a href='mailto:tons.gr@gmail.com'>tons.gr@gmail.com</a>
        </div>
        <div className='contactItem'>
          <i class="fa-solid fa-mobile-screen"></i><p>06 36 20 38 56</p>
        </div>
        <div className='contactItem'>
          <i class="fa-solid fa-house-chimney"></i><p>03100 Montluçon</p>
        </div>
      </div>
    </form>
    </>
  );
};

export default ContactForm;
