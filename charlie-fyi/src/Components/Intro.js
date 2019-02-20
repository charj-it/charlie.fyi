import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

import './Intro.css';

class Intro extends Component {
    render() {
        return(
          <section className="Container Intro Text-Center PadTopLarge MarTopLarge">
            <h1>Charlie Jennings</h1>
            <h2>Software Engineer</h2>
            <SocialIcon url="https://github.com/charj" />
            <SocialIcon url="https://linkedin.com/in/charj" />
            <SocialIcon url="https://instagram.com/charlie.fyi" />
          </section>
        )
    }
}

export default Intro;
