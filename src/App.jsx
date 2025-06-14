// App.js

import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Codingprofile from './components/Codingprofile';

const App = () => {
  return (
    <div className='bg-gray-900 text-white'>
      <Navbar />
      <div className='container mx-auto px-4 py-8'>
        <Home id="home" />
        <About id="about" />
        <Skills id="skills" />
        <Portfolio id="portfolio" />
        <Codingprofile id="coding"/>
        <Contact id="contact" />
      </div>
      <Footer />
    </div>
  );
};

export default App;
