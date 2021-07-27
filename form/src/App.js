import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';
import './App.css';

function App() {
  // define states here
  // 1. states for name, email and message
  const [variables, setVariables] = useState({
    name: '',
    email: '',
    message: ''
  });

  // 2. states for sucess message
  const [successMsg, setSuccessMsg] = useState('');

  // define handle event funtions here
  const handleNameChange = e => {
    setVariables({ name: e.target.value })
  }

  const handleEmailChange = e => {
    setVariables({ email: e.target.value })
  }

  const handleMessageChange = e => {
    setVariables({ message: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault();

    emailjs.sendForm(
      // define 4 parameters from emailjs here:
      // 1. service ID
      'service_wkoomdq',
      // 2. template ID
      'template_w28xka9',
      // 3. form element OR selector 
      // --> the API can capture all the data contained inside the className included here as the 3rd parameter
      // --> in this case, the data is name, email and message
      '.contact-form',
      // 4. emailjs user ID 
      'user_IfPLcN0kuGQtkG0iT1Jzr'
    ).then(() => {
      setSuccessMsg(
        <>
          <div className='success-msg'>
          </div>
          <div className='success-msg-modal'>
            <div className='success-msg-header'>
              <h1>Message Sent!</h1>
            </div>
            <button className='close-btn'>Okay</button>
          </div>
        </>
      )
    }
    ).catch();

    setVariables({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <div className="container App">
      <h1>
        Contact Me
      </h1>
      <form className='card contact-form' onSubmit={handleSubmit}>
        <input
          placeholder='Full Name'
          type='text'
          name='name'
          value={variables.name}
          onChange={handleNameChange}
          required
        ></input>
        <br></br>
        <input
          placeholder='Email Address'
          type='text'
          name='email'
          value={variables.email}
          onChange={handleEmailChange}
          required
        ></input>
        <br></br>
        <textarea
          placeholder='Type Your Message Here...'
          type='textarea'
          name='message'
          value={variables.message}
          onChange={handleMessageChange}
          required
        ></textarea>
        <br></br>
        <button
          className='btn-warning'
        >
          Submit
        </button>
      </form>
      {successMsg}
    </div>
  );
}

export default App;