import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
// Create State variables for the fields in the form
// We are also setting their initial values to an empty array 
export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
// Getting the value and name of the input which triggered the change
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
// Based on the input type, we set the state of either name, email, or message
    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
// Preventing the default behavior of the form submit(which is to refresh the page)
// First we check to see if the email is not valid or if there is a name and message
    if (!validateEmail(email) || !name ||  !message) {
      // Then send error message
      setErrorMessage('Input is invalid');
      return;
    }
    // Alert once submitted
    alert(`Thank You ${name}!`);
    setName('');
    setEmail('');
    setMessage('');
  };
//Render html when page loads
  return (
    <div>
      <div>
        <h1>Contact Me</h1>
      </div>

      
        <section id="contactform" class='form-inline'>
          <label for="name">NAME</label>
          <br></br>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="name"
            
          />
         <br></br>
          <label for="email">EMAIL</label>
          <br></br>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            
          />
          <br></br>
          <label for="message">MESSAGE</label>
          <br></br>
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="message"
            
          />
          <br></br>
          <br></br>
          <button type="button" onClick={handleFormSubmit}>
            SUBMIT
          </button>
        </section>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
   
  );
}