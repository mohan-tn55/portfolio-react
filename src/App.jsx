import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Mywork from './components/Mywork/Mywork';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Mywork />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;