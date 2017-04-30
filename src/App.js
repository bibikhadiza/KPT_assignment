import React, { Component } from 'react';
import './App.css';
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import HeroImage from './components/Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <HeroImage />
        <Footer />
      </div>
    );
  }
}

export default App;
