import React, { Component } from 'react';
import './Registry.css';
import amazonLogo from './amazon.svg';

class Registry extends Component {
  render() {
    return (
      <div className="registry">
        <div className="registry__inner">
          <h2>Thank you!</h2>
          <p>Please view our registry at these places</p>
          <div className="registry__wrap">
            <a href="https://www.amazon.com/wedding/emily-winthrop-zach-ancona-arvada-july-2018/registry/38N6R51GA7YD6">
              <img src={amazonLogo} alt='Amazon logo' />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Registry;
