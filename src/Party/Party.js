import React, { Component } from 'react';
import './Party.css';

class Party extends Component {
  render() {
    return (
      <div className="party">
        <div className="party__inner">
          <div className="party__single">
            <h2>Bridesmaids</h2>
            <p>Mho Winthrop</p>
            <p>Corinne Winthrop</p>
            <p>Rebecca Howard</p>
            <p>Shanna Brown</p>
          </div>
          <div className="party__single">
            <h2>Groomsmen</h2>
            <p>Jake Ancona</p>
            <p>Noel Browning</p>
            <p>Willie Wright</p>
            <p>Zach Grunder</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Party;
