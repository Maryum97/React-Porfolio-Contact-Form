import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import './App.css';

import ModalApp from './components/Modal/index2';

class App extends Component {
  // constructor here
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // define handle event funtions here
  handleNameChange = e => {
    this.setState({ name: e.target.value })
  }

  handleEmailChange = e => {
    this.setState({ email: e.target.value })
  }

  handleMessageChange = e => {
    this.setState({ message: e.target.value })
  }

  handleSubmit = e => {
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
    ).then(()=> {
      return (
        <div>
          <ModalApp />
        </div>
      )
    }
    ).catch();

    this.setState({
      name: '',
      email: '',
      message: ''
    })
  }

  render() {
    return (
      <div className="container App">
        <h1>
          Contact Me
        </h1>
        <form className='card contact-form' onSubmit={this.handleSubmit.bind(this)}>
          <input
            placeholder='Full Name'
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.handleNameChange}
            required
          ></input>
          <br></br>
          <input
            placeholder='Email Address'
            type='text'
            name='email'
            value={this.state.email}
            onChange={this.handleEmailChange}
            required
          ></input>
          <br></br>
          <textarea
            placeholder='Type Your Message Here...'
            type='textarea'
            name='message'
            value={this.state.message}
            onChange={this.handleMessageChange}
            required
          ></textarea>
          <br></br>
          <button
            className='btn-warning'
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default App;