import React, { Component } from 'react';
import image from './header_img.jpg';
import './Header.css';

var headerBG = {
  backgroundImage: 'url(' + image + ')',
};

class Header extends Component {
  render() {
    return (
      <div className="header">
        <header style={headerBG}>
          <div className="header__inner">
            <p>July 7, 2018</p>
            <p>Ralston’s Crossing</p>
            <span>Emily & Zach are getting married!</span>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
