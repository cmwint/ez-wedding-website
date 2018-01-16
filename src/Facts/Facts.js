import React, { Component } from 'react';
import './Facts.css';
import { Carousel } from 'react-responsive-carousel';

class Facts extends Component {
  render() {
    return (
      <Carousel showArrows={false} infiniteLoop autoPlay>
          <div>
              <p>Zach and Emily have three cats, Remy, Joe and Penny</p>
          </div>
          <div>
              <p>Zach and Emily are avid bowlers! Emily’s high game is a 211</p>
          </div>
          <div>
              <p>Zach proposed at the Chamberlin Observatory accompanied by Haley, one of Emily’s students, and Rob the Astronomer, who did his best to act like Zach hadn’t set the whole thing up!</p>
          </div>
          <div>
              <p>Since they started dating, Zach has embraced the vegetarian lifestyle (though he is not a vegetarian), and Emily has learned that guys play way too many video games (but still loves him just the same)!</p>
          </div>
          <div>
              <p>Zach wants a 4th cat, but Emily has put her foot down until they move out of their apartment. An agreement was met that if a munchkin cat pops up at a shelter that they would adopt it, since that would only bring their total cat amount to 3 and ½.</p>
          </div>
      </Carousel>
    );
  }
}

export default Facts;
