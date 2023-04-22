import React from 'react';
import '../CSS/AboutUs.css';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div className='about'>
      <div className="aboutContainer">

        <div className="aboutImg">
          <img src="https://media.istockphoto.com/id/1153409109/photo/mature-black-man-washing-car.jpg?s=612x612&w=0&k=20&c=1Z4KLiLx4O6tGq7fzxnDlLQTYTUyKiU3umD_UwUXlEQ=" alt="aboutImage" />
        </div>

        <div className="blankSpace"></div>

        <div className="aboutSection">
          <div className="aboutSectionName">
            <h2>About Us</h2>
            <hr />
          </div>
          <div className="aboutSectionHeading">
            <h1>Car Wash Services</h1>
          </div>
          <div className="aboutSectionDetails">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reprehenderit odit optio. Officiis sequi soluta et assumenda nostrum praesentium magni. Consequatur, minima. Sunt, aliquam magni.</p>
          </div>
          <div className="aboutSectionServices">
            <span>
              <CheckCircleOutlineIcon />
              <p>Seats Washing</p>
            </span>
            <span>
              <CheckCircleOutlineIcon />
              <p>Vacuum Cleaning</p>
            </span>
            <span>
              <CheckCircleOutlineIcon />
              <p>Interior Wet Cleaning</p>
            </span>
            <span>
              <CheckCircleOutlineIcon />
              <p>Window Wiping</p>
            </span>
          </div>
          <div className="aboutSectionButton">
            <button type='button'><Link to="/about" style={{textDecoration: 'none', color: 'white'}}>Learn More</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;