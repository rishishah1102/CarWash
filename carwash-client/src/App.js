import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Price from './Pages/Price';
import WashingPoints from './Pages/WashingPoints';
import Contact from './Pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Signup />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/service' element={<Service />} />
        <Route exact path='/price' element={<Price />} />
        <Route exact path='/washingpoint' element={<WashingPoints />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;