import React, { Component } from 'react';
import './Form.css';

  class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attendingOption: 'yes'
    };
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
              <label>
                <span>First name</span>
                <input type="text" name="firstname" />
              </label>
              <label>
                <span>Last name</span>
                <input type="text" name="lastname" />
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