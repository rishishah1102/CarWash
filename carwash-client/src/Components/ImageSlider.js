import React, { useState } from 'react';
import '../CSS/ImageSlider.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function ImageSlider({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const customStyle = {
        backgroundImage: `url(${slides[currentIndex].url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        transition: 'all 0.3s ease-in-out'
    }

    // setInterval(() => {
    //     const isFirstSlide = currentIndex === 0;
    //     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    //     setCurrentIndex(newIndex);
    // }, 4000);

    return (
        <div className='imageSlider'>
            <div className="leftArrow" onClick={goToPrevious}><ArrowBackIosIcon style={{ fontSize: '2rem', fontWeight: 'bolder' }} /></div>
            <div className="rightArrow" onClick={goToNext}><ArrowForwardIosIcon style={{ fontSize: '2rem', fontWeight: 'bolder' }} /></div>
            <span className='sliderTitle'><h5>{slides[currentIndex].title}</h5></span>
            <span className='sliderHeading'><h2>{slides[currentIndex].headline}</h2></span>
            <span className='sliderDesc'><p>{slides[currentIndex].desc}</p></span>
            <div className='images' style={customStyle}></div>
        </div>
    );
};

export default ImageSlider;
