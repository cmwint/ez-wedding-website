import React, { Component } from 'react';
import './Party.css';

class Party extends Component {
  render() {
    return (
      <div className="party">
        <div className="party__inner">
          <div className="party__single">
            Maids of Honor:
            Mho Winthrop
            Corinne Winthrop
            Bridesmaids 
            Rebecca Howard
            Shanna Brown
          </div>
          <div className="party__single">
            Best Man:
            Groomsmen:
            Jake Ancona
            Noel Browning
            Willie Wright
            Zach Grunder
          </div>
        </div>
      </div>
    );
  }
}

export default Party;
