import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import useDarkMode from '../hooks/useDarkMode';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [theme, setTheme] = useDarkMode()

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // send a post request to server with the contact information
      
      setShowSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setShowError(true);
    }
  };

  return (
    <>
    <div className={`theme-${theme}`}>
      <h1 className="text-center text-info my-5">Contact Us</h1>
      <Form style={{maxWidth: 1200, margin:"auto" }} onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            placeholder="Enter your message"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </Form.Group>
        <Button className='mt-5' variant="info" type="submit">
          Submit
        </Button>
      </Form>
      <Alert show={showSuccess} variant="success" className="mt-3">
        Message sent successfully!
      </Alert>
      <Alert show={showError} variant="danger" className="mt-3">
        There was an error sending your message.
      </Alert>
      </div>
    </>
  );
}

export default Contact;
