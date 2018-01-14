import React, { Component } from 'react';
import './Image.css';
import image from './couple.jpg';

const imageBG = {
  backgroundImage: 'url(' + image + ')',
};

class Image extends Component {
  render() {
    return (
      <div className="image" style={imageBG}></div>
    );
  }
}

export default Image;
