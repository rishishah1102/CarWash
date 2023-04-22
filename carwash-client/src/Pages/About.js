import React from 'react';
import Navbar from '../Components/Navbar';
import AboutUs from '../Components/AboutUs';
import Dashboard from '../Components/Dashboard';
import Footer from '../Components/Footer';
import ScrollToTop from '../Components/ScrollToTop';

function About() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <AboutUs />
      <Dashboard />
      <div style={{height: '2rem'}} />
      <Footer />
    </div>
  );
};

export default About;
