import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

import './Intro.css';

class Intro extends Component {
    render() {
        return(
          <div>
            <section className="Container Intro Text-Center PadTopMedium PadBotSmall MarTopLarge">
              <h1>Charlie Jennings</h1>
              <h2>Software Engineer, Tech Geek &amp; Motorsport Fanatic</h2>
            </section>
            <section className="Socials Text-Center">
              <SocialIcon url="https://github.com/charj" />
              <SocialIcon url="https://twitter.com/charlie_fyi" />
              <SocialIcon url="https://linkedin.com/in/charj" />
              <SocialIcon url="https://instagram.com/charlie.fyi" />
              <SocialIcon url="mailto:dev+web@charlie.fyi" />
            </section>
          </div>
        )
    }
}

export default Intro;
