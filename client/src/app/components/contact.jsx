import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import useDarkMode from '../hooks/useDarkMode';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [theme, toggleTheme] = useDarkMode()

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
      
    <div className='darkmodeDiv'>
            <button className='darkModeButton' onClick={toggleTheme}>
                <span className="sun">☀️</span>
                <span className="moon">🌙</span>
            </button>
        </div>
        
        <Alert show={showSuccess} variant="success" >
        Message sent successfully!
      </Alert>
      <Alert show={showError} variant="danger" >
        There was an error sending your message.
      </Alert> 
      <section>
      <div className="form-box">
        <div className="form-value">
            <form action="">
                <h2>Contact us</h2>
                <div className="inputbox">
               
                    <input type="text"/>
                    <label htmlFor="">Enter your email</label>
                </div>
                <div className="inputbox">
                
                    <input type="text" required/>
                    <label htmlFor="">Enter your name</label>
                </div>
                
                <div className="inputbox">
                  <input type="textarea" rows="100" />
                  <label htmlFor="">Enter your message</label>
                </div>
                <button className="logInButton" onClick={handleSubmit}>Send message</button>
                
            </form>

        </div>
    </div>
    
    </section>
      
      </div>
      </>
  );
}

export default Contact;
