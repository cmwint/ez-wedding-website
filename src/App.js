import React, { Component } from 'react';
import Header from './Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div className="App-intro">
        </div>
      </div>
    );
  }
}

export default App;
