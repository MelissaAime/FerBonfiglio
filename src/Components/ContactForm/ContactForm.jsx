import React, { useState } from 'react';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:contact@example.com?subject=Contact form submission&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" value={message} onChange={handleMessageChange} required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

