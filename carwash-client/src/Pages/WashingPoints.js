import React from 'react';
import Navbar from '../Components/Navbar';
import ScrollToTop from '../Components/ScrollToTop';
import Location from '../Components/Location';
import Footer from '../Components/Footer';

function WashingPoints() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <div style={{height: '3rem'}} />
      <Location />
      <Footer />
    </div>
  );
};

export default WashingPoints;
