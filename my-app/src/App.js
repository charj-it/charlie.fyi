import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Gallery from './Photos/Gallery';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <main className="charlie">
          </main>
          <Gallery />

        <Footer />
      </div>
    );
  }
}

export default App;
