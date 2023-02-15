import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap';

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
    <Form onSubmit={handleSubmit}> 
        <Form.Group className="mb-3" controlId="name">
            <Form.Label htmlFor="name">Name:</Form.Label>
            <Form.Control type="text" id="name" value={name} onChange={handleNameChange} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
            <Form.Label htmlFor="email">Email:</Form.Label>
            <Form.Control type="email" id="email" value={email} onChange={handleEmailChange} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="message">
            <Form.Label htmlFor="message">Message:</Form.Label>
            <Form.Control as="textarea" rows={3} id="message" value={message} onChange={handleMessageChange} required />
        </Form.Group>
        
        <Button type="submit" variant="dark">Submit</Button>
    </Form>

  );
};
