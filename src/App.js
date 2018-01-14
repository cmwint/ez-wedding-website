import React, { Component } from 'react';
import Header from './Header/Header';
import Intro from './Intro/Intro';
import Details from './Details/Details';
import Party from './Party/Party';
import Registry from './Registry/Registry';
import Image from './Image/Image';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Wedding">
        <header className="Wedding-header">
          <Header />
        </header>
        <div className="Wedding-intro">
          <Intro />
        </div>
        <div className="Wedding-details">
          <Details />
        </div>
        <div className="Wedding-party">
          <Party />
        </div>
        <div className="Wedding-registry">
          <Registry />
        </div>
        <div className="Wedding-image">
          <Image />
        </div>
        <footer>
          Copyright © Emily & Zach. Photography by ..........
        </footer>
      </div>
    );
  }
}

export default App;
