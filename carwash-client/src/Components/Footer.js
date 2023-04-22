import React from 'react';
import '../CSS/Footer.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className='footer'>
            <div className="footerItems">
                <div className="footerBox">
                    <h2>RS-Wash</h2>
                    <p>Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem lorem sit sed elitr sit no, sed kasd et ipsum dolor duo dolor</p>
                    <div className="socialMedia">
                        <TwitterIcon />
                        <FacebookIcon />
                        <InstagramIcon />
                        <YouTubeIcon />
                    </div>
                </div>
                <div className="footerBox">
                    <h2>Get In Touch</h2>
                    <span className='details'>
                        <LocationOnIcon />
                        <p>1122 CTM, Ahmedabad</p>
                    </span>
                    <span className='details'>
                        <CallIcon />
                        <p>+91 9911100022</p>
                    </span>
                    <span className='details'>
                        <EmailIcon />
                        <p>rswash@gmail.com</p>
                    </span>
                </div>
                <div className="footerBox">
                    <h2>Opening Hours</h2>
                    <span className='time'>
                        <h4>Monday-Friday:</h4>
                        <p>9:00 A.M. - 9:00 P.M.</p>
                    </span>
                    <span className='time'>
                        <h4>Saturday-Sunday:</h4>
                        <p>9:00 A.M. - 12:00 P.M.</p>
                    </span>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; Copyright: {year} RS-Wash.com</p>
            </div>
        </div>
    );
};

export default Footer;
