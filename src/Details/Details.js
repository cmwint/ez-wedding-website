import React, { Component } from 'react';
import './Details.css';
import recordSVG from './record.svg';
import chapelSVG from './chapel.svg';
import glassesSVG from './glasses.svg';

class Details extends Component {
  render() {
    return (
      <div className="details">
        <div className="details__inner">
          <div className="details__single">
            <div className="details__image">
              <img src={chapelSVG} alt='Wedding chapel' />
            </div>
            <h2>The Ceremony</h2>
            <h4>5:00pm</h4>
            <p>
              At Ralston’s Crossing Chapel
              <a href="https://www.google.com/maps/place/Ralston%E2%80%99s+Crossing+Event+Center/@39.8311025,-105.1666335,17z/data=!3m1!4b1!4m5!3m4!1s0x876b8f038f837b1f:0x3bba13873185cfec!8m2!3d39.8311025!4d-105.1644448">7400 Indiana St, Arvada, Colorado 80007</a>
            </p>

          </div>
          <div className="details__single">
            <div className="details__image">
              <img src={glassesSVG} alt='Wedding glasses' />
            </div>
            <h2>The Reception</h2>
            <h4>5:45pm</h4>
            <p>Ralston’s Crossing Chapel</p>
          </div>
          <div className="details__single">
            <div className="details__image">
              <img src={recordSVG} alt='Old school music record' />
            </div>
            <h2>Music</h2>
            <h4>7:00pm</h4>
            <p>Request a song at the wedding!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
