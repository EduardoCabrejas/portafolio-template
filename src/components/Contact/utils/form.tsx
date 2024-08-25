"use client";
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useTheme } from '@/context/themeContext';

const ContactForm: React.FC = () => {
  const { theme } = useTheme();
  const buttonClass = theme === 'light' ? 'formButtonLight' : 'formButtonDark';

  // Estado para manejar los valores del formulario y los errores
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors = {
      name: formValues.name ? '' : 'El nombre es requerido',
      email: formValues.email && /^\S+@\S+\.\S+$/.test(formValues.email) ? '' : 'Debe ser un email válido',
      subject: formValues.subject ? '' : 'El asunto es requerido',
      message: formValues.message ? '' : 'El mensaje es requerido',
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setFormStatus(null);

    try {
      await emailjs.send(
        'service_ioskeu7',
        'template_4cjbo2n',
        {
          from_name: formValues.name,
          reply_to: formValues.email,
          subject: formValues.subject,
          message: formValues.message,
          to_email: 'educabre8991@gmail.com',
        },
        'asmU48oKvPEdJ8Kku'
      );
      setFormStatus('Correo enviado exitosamente');
      setFormValues({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      setFormStatus('Hubo un problema al enviar el correo');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h1 className='sub-title'>Envíame un correo.</h1>
      
      <div className="form-group">
        <div className='group'>
        <label htmlFor="name" className='text'>Nombre</label>
        {errors.name && <p className="error-message">{errors.name}</p>}
        </div>
        <input
          name="name"
          type="text"
          value={formValues.name}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="form-group">
      <div className='group'>
        <label htmlFor="email" className='text'>E-mail</label>
        {errors.email && <p className="error-message">{errors.email}</p>}
      </div>
        <input
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <div className='group'>
        <label htmlFor="subject" className='text'>Asunto</label>
        {errors.subject && <p className="error-message">{errors.subject}</p>}
        </div>
        <input
          name="subject"
          type="text"
          value={formValues.subject}
          onChange={handleChange}
          className="form-control"
        />
        
      </div>

      <div className="form-group">
      <div className='group'>
        <label htmlFor="message" className='text'>Mensaje</label>
        {errors.message && <p className="error-message">{errors.message}</p>}
      </div>
        <textarea
          name="message"
          value={formValues.message}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className='flex justify-center items-center mb-4'>
      <button type="submit" disabled={isSubmitting} className={buttonClass}>
        Enviar
      </button>
      </div>
      
      {formStatus && <p className="form-status">{formStatus}</p>}
    </form>
  );
};

export default ContactForm;
