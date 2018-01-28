import React, { Component } from 'react';
import './Form.css';

class Form extends Component {

  render() {
    return (
      <div className="form">
        <div className="form__inner">
          <h2>We'd love for you to join us!</h2>
          <h3>Please visit <a href="https://docs.google.com/forms/d/e/1FAIpQLSd2LkZmC78s-OR0sH2KxjlflU2ys-Dak0C3pwS-0d2MifdmZA/viewform" target="_blank">this form</a> to RSVP for the wedding.
          </h3>
        </div>
      </div>
    );
  }
}

export default Form;
