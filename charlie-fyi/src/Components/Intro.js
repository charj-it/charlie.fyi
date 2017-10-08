import React, { Component } from 'react';

import './Intro.css';

class Intro extends Component {
    render() {
        return(
          <section className="Container Intro Text-Center PadTopLarge MarTopLarge">
            <h2>This is learning excersise.</h2>
            <h3>I&apos;m lerning <a href="https://reactjs.org/">React</a> while building myself a website.</h3>
            <small>For now, here&apos;s a few of my favourite photos from past few years.</small>
          </section>
        )
    }
}

export default Intro;
