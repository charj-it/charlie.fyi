import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Gallery from './Components/Photos/Gallery';
import Intro from './Components/Intro';

import './App.css';
import './Components/Typography.css';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Quicksand', 'sans-serif']
  }
});

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <main className="charlie">
          </main>
          <Intro />
          <Gallery />

        <Footer />
      </div>
    );
  }
}
