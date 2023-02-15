import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import { BsCursor, BsCursorFill } from 'react-icons/bs';

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

  const [icon, setIcon] = useState(<BsCursor />);
  
  const handleClick = () => {
    if (icon.type === BsCursor) {
      setIcon(<BsCursorFill />);
    } else {
      setIcon(<BsCursor />);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className='contact-form'> 
        <Form.Group className="mb-4">
            <Form.Label htmlFor="name">Name:</Form.Label>
            <Form.Control type="text" id="name" value={name} onChange={handleNameChange} required />
        </Form.Group>

        <Form.Group className="mb-4">
            <Form.Label htmlFor="email">Email:</Form.Label>
            <Form.Control type="email" id="email" value={email} onChange={handleEmailChange} required />
        </Form.Group>

        <Form.Group className="mb-4">
            <Form.Label htmlFor="message">Message:</Form.Label>
            <Form.Control as="textarea" rows={5} id="message" value={message} onChange={handleMessageChange} required />
        </Form.Group>
        
        <div className='contact-form-button'>
            <Button type="submit" onClick={handleClick}> Submit {icon} </Button>
        </div>
    </Form>

  );
};


