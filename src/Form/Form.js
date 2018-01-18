import React, { Component } from 'react';
import './Form.css';

  class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attendingOption: 'yes',
      activeFirst: false,
      activeLast: false
    };
  }

  handleBlurEvent = (e) => {
    return (e.target.name === 'firstname') ? this.setState({activeFirst: false}) : this.setState({activeLast: false})
  }
  
  handleFocusEvent = (e) => {
    return (e.target.name === 'firstname') ? this.setState({activeFirst: true}) : this.setState({activeLast: true})
  }
  handleInputFilled = (e) => {
    if(e.target.value !== '') {
      return (e.target.name === 'firstname') ? this.setState({activeFirst: true}) : this.setState({activeLast: true})
    } else {
      return (e.target.name === 'firstname') ? this.setState({activeFirst: false}) : this.setState({activeLast: false})
    }
  }

  handleOptionChange = (e) => {
    this.setState({
      attendingOption: e.target.value
    });
  }

  render() {
    return (
      <div className="form">
        <div className="form__inner">
          <form>
            <div className="form__names">
              <label className={this.state.activeFirst ? 'active' : ''}>
                <span>First name</span>
                <input
                  type="text"
                  name="firstname"
                  onBlur={this.handleBlurEvent}
                  onFocus={this.handleFocusEvent}
                  onChange={this.handleInputFilled} />
              </label>
              <label className={this.state.activeLast ? 'active' : ''}>
                <span>Last name</span>
                <input
                  type="text"
                  name="lastname"
                  onBlur={this.handleBlurEvent}
                  onFocus={this.handleFocusEvent}
                  onChange={this.handleInputFilled} />
              </label>
            </div>
            <div className="form__extra">
              <div className="form__attendance">
                <span>Will you be attending?</span>
                <label>
                  <input type="radio"
                  name="attendance" value="yes"
                  checked={this.state.attendingOption === 'yes'}
                  onChange={this.handleOptionChange}/>
                  <span>Yes</span>
                </label>
                <label>
                  <input type="radio"
                  name="attendance" value="no"
                  checked={this.state.attendingOption === 'no'}
                  onChange={this.handleOptionChange}/>
                  <span>No</span>
                </label>
              </div>
              {this.state.attendingOption === 'yes' &&
                <label>
                  <span>How many guests will be in your party?</span>
                  <input type="number" name="guests" min="1" max="10" />
                </label>
              }
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Form;