import React, { Component } from 'react';
import './App.css';
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import ZipCode from './components/ZipCode'
import HeroImage from './components/Image'
import Pricings from './components/Pricings'
import PrepHeader from './components/PrepHeader'
import Steps from './components/Steps'
import Highlight from './components/Highlight'
import Video from './components/Video'
import Channel from './components/Channel'
import Cards from './components/Cards'
import Hsg from './components/Hsg'


class App extends Component {
  render() {
    const firstHeroTitle = <h1>Choose your SAT <sup>®</sup> Prep</h1>
    const secondHeroTitle = <h1>About the SAT</h1>
    return (
      <div className="App">
        <NavBar />
        <HeroImage title={firstHeroTitle} description='Proven strategies. Personalized prep.' backgroundImage='https://kaptest.cdn.prismic.io/kaptest/15375d0f0cd93f9832916892016291f4b78bf1c1_billboard-prep-options-c.jpg'/>
        <ZipCode />
        <Pricings />
        <PrepHeader />
        <Steps />
        <Highlight />
        <Video/>
        <Channel />
        <HeroImage title={secondHeroTitle} description='The SAT is a college entrance exam used by most colleges and universities to assess your readiness for college-level work. Your SAT score is a major factor in college admissions, so it’s important to prep to achieve your best score. The SAT exam tests your skills in math, reading, and writing, and includes an optional essay.' backgroundImage='https://kaptest.cdn.prismic.io/kaptest/fb65d30ae936362b70f47de449234e546520c440_billboard-about-sat-large.jpg'/>
        <Cards />
        <Hsg />



        <Footer />
      </div>
    );
  }
}

export default App;
