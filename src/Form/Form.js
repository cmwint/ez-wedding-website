import React, { Component } from 'react';
import './Form.css';

class Form extends Component {

  render() {
    return (
      <div className="form">
        <div className="form__inner">
          <h2>We'd love for you to join us!</h2>
          <h3>Please visit <a href="https://docs.google.com/forms/d/e/1FAIpQLSd2LkZmC78s-OR0sH2KxjlflU2ys-Dak0C3pwS-0d2MifdmZA/viewform" target="_blank">this form</a> to RSVP for the wedding.</h3>
          <br></br>
          <hr></hr>
          <br></br>
          <h2>Out of town guests</h2>
          <h3>You are welcome to stay at the <a href="https://www.google.com/maps/place/La+Quinta+Inn+%26+Suites+Denver+Southwest+Lakewood/@39.6522528,-105.0754886,15z/data=!4m2!3m1!1s0x0:0xe915efad940f85ae?sa=X&ved=0ahUKEwjBsP_Qo53aAhUr_IMKHSIkD5QQ_BIInwEwCg">La Quinta Inn Suites</a> located at US Hwy 285 and Wadsworth Blvd.</h3>
          <h3>Please ask for a room under Emily Winthrop's name.</h3>
        </div>
      </div>
    );
  }
}

export default Form;
