import React from 'react';
import Navbar from '../Components/Navbar';
import ScrollToTop from '../Components/ScrollToTop';
import WashingPrice from '../Components/WashingPrice';
import Footer from '../Components/Footer';

function Price() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <WashingPrice />
      <Footer />
    </div>
  );
};

export default Price;
