import React from 'react';
import '../CSS/Home.css';
import Navbar from '../Components/Navbar';
import ImageSlider from '../Components/ImageSlider';
import AboutUs from '../Components/AboutUs';
import TypesOfServices from '../Components/TypesOfServices';
import Dashboard from '../Components/Dashboard';
import WashingPrice from '../Components/WashingPrice';
import Location from '../Components/Location';
import Footer from '../Components/Footer';
import image1 from '../Images/img-1.jpg';
import image2 from '../Images/img-2.jpg';
import image3 from '../Images/img-3.jpg';
import ScrollToTop from '../Components/ScrollToTop';

function Home() {

    const slides = [
        {url: image1, title: "Cleaning", headline: "Keep Your Car Newer", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, aspernatur! Sequi sapiente mollitia expedita quae!"},
        {url: image2, title: "Washing", headline: "Car Washing Facilities", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, aspernatur! Sequi sapiente mollitia expedita quae!"},
        {url: image3, title: "Wiping", headline: "Quality Service for you", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, aspernatur! Sequi sapiente mollitia expedita quae!"}
    ]
    return (
        <div className='home'>
            <ScrollToTop />
            <Navbar />
            <div className="imageCarousel">
                <ImageSlider slides={slides} />
            </div>
            <AboutUs />
            <TypesOfServices />
            <Dashboard />
            <WashingPrice />
            <Location />
            <Footer />
        </div>
    );
};

export default Home;;
