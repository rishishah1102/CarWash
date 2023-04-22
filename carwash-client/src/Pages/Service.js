import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import TypesOfServices from '../Components/TypesOfServices';
import ScrollToTop from '../Components/ScrollToTop';

function Service() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <div style={{height: '2rem'}} />
      <TypesOfServices />
      <Footer />
    </div>
  );
};

export default Service;
