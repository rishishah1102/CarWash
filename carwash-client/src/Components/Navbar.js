import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Images/Logo-1.png'
import "../CSS/Navbar.css";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import instance from '../Utils/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Navbar() {

    const [sticky, setSticky] = useState(false);
    const [click, handleClick] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [plan, choosePlan] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleNumber = (e) => {
        setNumber(e.target.value);
    };

    const handleSelect = (e) => {
        choosePlan(e.target.value);
    }

    const handleDate = (e) => {
        setDate(e.target.value);
    }

    const handleTime = (e) => {
        setTime(e.target.value);
    }

    useEffect(() => {
        const fetchData = async () => {
            const request = await instance.get('/navbar', { headers: { Authorization: localStorage.getItem('carWashToken') } });
            setName(request.data.user.name)
            setEmail(request.data.user.email)
            setNumber(request.data.user.phoneNumber)
        }
        fetchData();
    }, []);

    const bookService = () => {
        if (plan === "" || time === "" || date === "") {
            toast.warn("All the fields are required!");
        }
        else {
            instance.post('/navbar', { service: plan, serviceDate: date, serviceTime: time }, { headers: { Authorization: localStorage.getItem('carWashToken') } })
                .then((res) => {
                    if (res.status === 200) {
                        toast.success("Service Booked Successfully!");
                    }
                })
                .catch((err) => {
                    toast.error("Please try again later!");
                });
            setShowForm(false);
        }
    }

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 80) {
                setSticky(true);
            }
            else {
                setSticky(false);
            }
        });
    });

    return (
        <div className="navbar">

            <div className="upperNavbar">
                <img src={logo} alt="Logo" className="navLogo" />
                <div className="navBoxes">
                    <div className="navBox">
                        <span className="navBoxSpanIcon"><AccessTimeIcon /></span>
                        <span className="navBoxSpan">
                            <h3>Opening Hour</h3>
                            <p>Mon - Fri, 9:00 - 9:00</p>
                        </span>
                    </div>
                    <div className="navBox">
                        <span className="navBoxSpanIcon"><CallIcon /></span>
                        <span className="navBoxSpan">
                            <h3>Call Us</h3>
                            <p>+91 9911100022</p>
                        </span>
                    </div>
                    <div className="navBox">
                        <span className="navBoxSpanIcon"><MailIcon /></span>
                        <span className="navBoxSpan">
                            <h3>Email Us</h3>
                            <p>rswash@gmail.com</p>
                        </span>
                    </div>
                </div>
            </div>

            {windowSize.innerWidth > 950 ?
                <div className={`lowerNavbar ${sticky && 'navSticky'}`}>
                    <ul>
                        <li><NavLink className='navRoutes' to="/home">Home</NavLink></li>
                        <li><NavLink className='navRoutes' to="/about">About</NavLink></li>
                        <li><NavLink className='navRoutes' to="/service">Service</NavLink></li>
                        <li><NavLink className='navRoutes' to="/price">Price</NavLink></li>
                        <li><NavLink className='navRoutes' to="/washingpoint">Washing Points</NavLink></li>
                        <li><NavLink className='navRoutes' to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="navButton">
                        <button type="submit" onClick={() => setShowForm(true)}>Book Service</button>
                    </div>
                    <div className={`serviceForm ${showForm && 'serviceFormHeight'}`}>
                        <span>
                            <p>Name:</p>
                            <input type="name" placeholder='Your Name' onChange={handleName} value={name} />
                        </span>
                        <span>
                            <p>E-Mail:</p>
                            <input type="email" placeholder='eg:- abc@gmail.com' onChange={handleEmail} value={email} />
                        </span>
                        <span>
                            <p>Mobile No:</p>
                            <input type="number" placeholder='Your Number' onChange={handleNumber} value={number} />
                        </span>
                        <span>
                            <p>Choose Package</p>
                            <select onChange={handleSelect}>
                                <option value="Basic Cleaning">Basic Cleaning</option>
                                <option value="Premium Cleaning">Premium Cleaning</option>
                                <option value="Deluxe Cleaning">Deluxe Cleaning</option>
                            </select>
                        </span>
                        <span>
                            <p>Choose Date</p>
                            <input type="date" className='date' onChange={handleDate} />
                        </span>
                        <span>
                            <p>Choose Time</p>
                            <input type="time" className='time' onChange={handleTime} />
                        </span>
                        <button type='submit' onClick={bookService}>Book</button>
                        <div onClick={() => setShowForm(false)}><CloseIcon /></div>
                    </div>
                </div>
                :
                <div className={`lowerNavbar ${sticky && 'navSticky'} ${click && 'navHeight'}`}>
                    <div className='navMobileView'>
                        <span>MENU</span>
                        <span onClick={() => { handleClick(!click) }}><MenuIcon /></span>
                    </div>
                    <div className={`navDropdown ${click && 'show'}`}>
                        <ul>
                            <li><NavLink className='navRoutes' to="/home">Home</NavLink></li>
                            <li><NavLink className='navRoutes' to="/about">About</NavLink></li>
                            <li><NavLink className='navRoutes' to="/service">Service</NavLink></li>
                            <li><NavLink className='navRoutes' to="/price">Price</NavLink></li>
                            <li><NavLink className='navRoutes' to="/washingpoint">Washing Points</NavLink></li>
                            <li><NavLink className='navRoutes' to="/contact">Contact</NavLink></li>
                        </ul>
                        <div className="navButton">
                            <button type="submit" onClick={() => setShowForm(true)}>Book Service</button>
                        </div>
                    </div>
                    <div className={`serviceForm ${showForm && 'serviceFormHeight'}`}>
                        <span>
                            <p>Name:</p>
                            <input type="name" placeholder='Your Name' onChange={handleName} value={name} />
                        </span>
                        <span>
                            <p>E-Mail:</p>
                            <input type="email" placeholder='eg:- abc@gmail.com' onChange={handleEmail} value={email} />
                        </span>
                        <span>
                            <p>Mobile No:</p>
                            <input type="number" placeholder='Your Number' onChange={handleNumber} value={number} />
                        </span>
                        <span>
                            <p>Choose Package</p>
                            <select onChange={handleSelect}>
                                <option value="Basic Cleaning">Basic Cleaning</option>
                                <option value="Advanced Cleaning">Advanced Cleaning</option>
                                <option value="Premium Cleaning">Premium Cleaning</option>
                            </select>
                        </span>
                        <span>
                            <p>Choose Date</p>
                            <input type="date" onChange={handleDate} />
                        </span>
                        <span>
                            <p>Choose Time</p>
                            <input type="time" onChange={handleTime} />
                        </span>
                        <button type='submit' onClick={bookService}>Book</button>
                        <div onClick={() => setShowForm(false)}><CloseIcon /></div>
                    </div>
                </div>
            }

            <ToastContainer position="bottom-right" theme="colored" />
        </div>
    );
};

export default Navbar;