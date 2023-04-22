import React, { useEffect, useState } from 'react';
import '../CSS/ScrollTop.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function ScrollToTop() {
    const [topBtn, setTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setTopBtn(true);
            }
            else {
                setTopBtn(false);
            }
        })
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            {topBtn && (<button className='topBtn' onClick={scrollUp}><KeyboardArrowUpIcon /></button>)}
        </>
    );
};

export default ScrollToTop;
