import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Gallery from './Components/Photos/Gallery';
import Intro from './Components/Intro';
import GitHubRibbon from './Components/GitHubRibbon';

import './App.css';
import './Components/Typography.css';
import './Components/Spacing.css';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Quicksand', 'sans-serif']
  }
});

export default class App extends Component {
  componentDidMount() {
    document.title = "Charlie Jennings - Developer";
  }

  render() {
    return (
      <div>
        <Header />
        <Intro />
        <Gallery />
        <Footer />
        <GitHubRibbon />
      </div>
    );
  }
}
