import React, { useState, useEffect } from 'react';
import '../CSS/PricePlan.css';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CancelIcon from '@mui/icons-material/Cancel';
import CloseIcon from '@mui/icons-material/Close';
import instance from '../Utils/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PricePlan({ plan, id }) {
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [planItem, choosePlan] = useState("");
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
        if (id === 0) {
            choosePlan("Basic-Cleaning");
        }
        else if (id === 1) {
            choosePlan("Premium-Cleaning");
        }
        else {
            choosePlan("Deluxe-Cleaning");
        }
    }, [id]);


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
            instance.post('/navbar', { service: planItem, serviceDate: date, serviceTime: time }, { headers: { Authorization: localStorage.getItem('carWashToken') } })
                .then((res) => {
                    if (res.status === 200) {
                        toast.success("Service Booked Successfully!");
                    }
                })
                .catch((err) => {
                    toast.error("Please try again later!");
                });
            setShow(false);
        }
    }

    // const [show, handleShow] = useState(false)
    // const handleClick = () => {
    //     handleShow(!show);
    // }

    // // if (id === 1) {
    // //     handleShow(true);
    // // }

    return (
        <div className={`pricePlan ${id === 1 && 'selected'}`}>
            <h3>{plan.title}</h3>
            <div className="price">
                <CurrencyRupeeIcon />
                <h1>{plan.price}</h1>
                <h5>.99</h5>
            </div>
            <div className="planItems">
                <span>
                    <CheckCircleOutlineIcon />
                    <span>Seats Washing</span>
                </span>
                <span>
                    <CheckCircleOutlineIcon />
                    <span>Vacuum Cleaning</span>
                </span>
                <span>
                    <CheckCircleOutlineIcon />
                    <span>Exterior Cleaning</span>
                </span>
                <span>
                    {id === 0 ? <CancelIcon /> : <CheckCircleOutlineIcon />}
                    <span>Interior Wet Cleaning</span>
                </span>
                <span>
                    {id === 0 || id === 1 ? <CancelIcon /> : <CheckCircleOutlineIcon />}
                    <span>Window Wiping</span>
                </span>
            </div>
            <button type='button' className={`${id === 1 ? 'selectedButton' : 'btn'}`} onClick={() => { setShow(true) }}>Book Now</button>
            <div className={`serviceForm ${show && 'serviceFormHeight'}`}>
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
                        {id === 0 ? <option defaultValue="Basic Cleaning">Basic Cleaning</option> : <option value="Basic Cleaning">Basic Cleaning</option>}
                        {id === 1 ? <option defaultValue="Premium Cleaning">Premium Cleaning</option> : <option value="Advanced Cleaning">Advanced Cleaning</option>}
                        {id === 2 ? <option defaultValue="Deluxe Cleaning">Deluxe Cleaning</option> : <option value="Premium Cleaning">Premium Cleaning</option>}
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
                <div onClick={() => setShow(false)}><CloseIcon /></div>
            </div>
            <ToastContainer position="bottom-right" theme="colored" />
        </div>
    )
};

export default PricePlan;
