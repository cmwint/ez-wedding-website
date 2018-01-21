import React, { Component } from 'react';
import './Intro.css';

class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <div className="intro__inner">
          <svg width="80" height="80" viewBox="0 0 800 700" xmlns="http://www.w3.org/2000/svg">
            <path d="m263.42 235.15c-66.24 0-120 53.76-120 120 0 134.76 135.93 170.09 228.56 303.31 87.574-132.4 228.56-172.86 228.56-303.31 0-66.24-53.76-120-120-120-48.048 0-89.402 28.37-108.56 69.188-19.161-40.817-60.514-69.188-108.56-69.188z" />
          </svg>
          <h2>Emily & Zach</h2>
          <p>Emily moved back to Denver in summer of 2013 and started keeping her mom company at her dad’s weekly softball games. Zach had recently started playing with the same team. One night after a game, Zach and Emily started talking about his upcoming time off from work due to a government shutdown, which was not a big deal to Zach because he told her that, “my cat and I don’t eat much”.</p>
          <p>The perfect man does exist! It was true love. He asked Emily out shortly after the season had ended.</p>
          <p>4 years and 3 cats later on a rainy date night at the Chamberlin Observatory, Zach proposed to the love of his life.</p>
        </div>
      </div>
    );
  }
}

export default Intro;
