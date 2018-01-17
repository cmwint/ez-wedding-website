import React, { Component } from 'react';
import Header from './Header/Header';
import Intro from './Intro/Intro';
import Details from './Details/Details';
import Party from './Party/Party';
import Registry from './Registry/Registry';
import Image from './Image/Image';
import Facts from './Facts/Facts';
import Form from './Form/Form';
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
        <div className="Wedding-facts">
          <Facts />
        </div>
        <div className="Wedding-image">
          <Image />
        </div>
        <div className="Wedding-form">
          <Form />
        </div>
        <footer>
          Copyright © Emily & Zach. Photography by Haley Eickmann.
        </footer>
      </div>
    );
  }
}

export default App;
