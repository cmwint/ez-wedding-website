import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFirst: false,
      activeLast: false,
      firstName: '',
      lastName: '',
      attendingOption: 'yes',
      numberAttending: '',
      memo: '',
      formSent: false
    };
  }

  handleBlurEvent = (e) => {
    if(e.target.value !== '') {
      return (e.target.name === 'firstname') ? this.setState({activeFirst: true}) : this.setState({activeLast: true})
    }
    return (e.target.name === 'firstname') ? this.setState({activeFirst: false}) : this.setState({activeLast: false})
  }
  
  handleFocusEvent = (e) => {
    return (e.target.name === 'firstname') ? this.setState({activeFirst: true}) : this.setState({activeLast: true})
  }
  handleInputFilled = (e) => {
    if(e.target.value !== '') {
      return (e.target.name === 'firstname') ? this.setState({activeFirst: true, firstName: e.target.value}) : this.setState({activeLast: true, lastName: e.target.value})
    }
    return (e.target.name === 'firstname') ? this.setState({activeFirst: false}) : this.setState({activeLast: false})
  }

  handleOptionChange = (e) => {
    this.setState({
      attendingOption: e.target.value
    });
  }

  handleNumberAttendingChange = (e) => {
    this.setState({
      numberAttending: e.target.value
    });
  }

  handleMemoChange = (e) => {
    this.setState({
      memo: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    
    fetch('/thank-you', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        attendingOption: this.state.attendingOption,
        numberAttending: this.state.numberAttending,
        memo: this.state.memo,
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.success) {
        this.setState({formSent: true})
      }
      else this.setState({formSent: false})
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <div className="form">
        <div className="form__inner">
          <h2>We'd love for you to join us!</h2>
          <h3>Please RSVP here</h3>
          <form method="POST" id="rsvp" onSubmit={this.handleSubmit}>
            <div className="form__names">
              <label className={this.state.activeFirst ? 'active' : ''}>
                <span>First name *</span>
                <input
                  type="text"
                  name="firstname"
                  required
                  onBlur={this.handleBlurEvent}
                  onFocus={this.handleFocusEvent}
                  onChange={this.handleInputFilled} />
              </label>
              <label className={this.state.activeLast ? 'active' : ''}>
                <span>Last name *</span>
                <input
                  type="text"
                  name="N"
                  required
                  onBlur={this.handleBlurEvent}
                  onFocus={this.handleFocusEvent}
                  onChange={this.handleInputFilled} />
              </label>
            </div>
            <div className="form__attendance">
              <span>Will you be attending?</span>
              <label className={this.state.attendingOption === 'yes' ? 'active' : ''}>
                <input type="radio"
                name="attendance" value="yes"
                onChange={this.handleOptionChange}/>
                <span>Yes</span>
              </label>
              <label className={this.state.attendingOption === 'no' ? 'active' : ''}>
                <input type="radio"
                name="attendance" value="no"
                onChange={this.handleOptionChange} />
                <span>No</span>
              </label>
            </div>
            {this.state.attendingOption === 'yes' &&
              <div className="form__number">
                <label>
                  <span>How many guests will be in your party? *</span>
                  <input required 
                    type="number" 
                    name="guests" 
                    min="1" max="10" 
                    onChange={this.handleNumberAttendingChange} />
                </label>
              </div>
            }
            <div className="form__memo">
              <textarea name="memo" placeholder='Send us a note! (optional)'></textarea>
            </div>
            <button
              type="submit" 
              form="rsvp" 
              value="Submit"
              onChange={this.handleMemoChange} >
                Submit
            </button>
          </form>
          {this.state.formSent &&
            <div>Thank you, form sent!</div>
          }
        </div>
      </div>
    );
  }
}
export default Form;