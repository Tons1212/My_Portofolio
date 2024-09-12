import React, { useState, useEffect } from 'react';

const ContactForm = () => {
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
      }, 10000); // 10000ms = 10 seconds

      return () => clearTimeout(timer); // Cleanup function to clear timeout
    }
  }, [status]);

  return (
    <form id='contactForm' className='contactForm' onSubmit={handleSubmit}>
      <div className='formGroup'>
        <label>
          Nom :
          <input type="text" name="nom" value={formData.nom} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Prénom :
          <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} required />
        </label>
        <br />
      </div>
      <div className='formGroup'>
        <label>
          Téléphone :
          <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Email :
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
      </div>
      <label>
        Objet :
        <input type="text" name="objet" value={formData.objet} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Message :
        <textarea name="message" value={formData.message} onChange={handleChange} required />
      </label>
      <br />
      <button type="submit">Envoyer</button>
      {status && <p>{status}</p>}
    </form>
  );
};

export default ContactForm;
