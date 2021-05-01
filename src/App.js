import React from 'react';
import './App.css';
import Navbar from './Navbar.js';
import Banner from './Banner.js';
import About  from './About.js';
import Portfolio from './Portfolio.js';
import Footer from './Footer.js';

function App() {
  let sz = window.screen.width;
  if(sz > 769){
    return (
      <div className="wrapper">
        <Navbar />
        <Banner />
        <About  />
        <Portfolio />
      </div>
    );
  }else{
    return (
      <div className="wrapper">
        <Navbar />
        <Banner />
        <About  />
        <Portfolio />
        <Footer />
      </div>
    );
  }
  
}

export default App;
