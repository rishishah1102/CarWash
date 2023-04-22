import React, { useState, useEffect } from 'react';
import '../CSS/Location.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import instance from '../Utils/axios';

function Location() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [desc, setDesc] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleDesc = (e) => {
        setDesc(e.target.value);
    }

    useEffect(() => {
        const fetchData = async () => {
            const request = await instance.get('/navbar', { headers: { Authorization: localStorage.getItem('carWashToken') } });
            setName(request.data.user.name);
            setEmail(request.data.user.email);
        }
        fetchData();
    }, []);

    const handleFeedback = () => {
        if (desc === "") {
            toast.warn("Feedback is required!");
        }
        else {
            const feedData = {
                name: name,
                email: email,
                feedback: desc
            }
            instance.post('/feedback', feedData, { headers: { Authorization: localStorage.getItem('carWashToken') } })
                .then((res) => {
                    if (res.status === 200) {
                        toast.success("Thanks for sharing your valuable Feedback!");
                    }
                })
                .catch((err) => {
                    toast.error("Please try again later!");
                });
        }

    }

    return (
        <>

            <div className='location'>
                <div className="locationContainer">
                    <h2>Washing Points</h2>
                    <hr />
                    <h1>Car Washing & Care Points</h1>
                    <div className="locationPoints">
                        <div className="locationPoint">
                            <LocationOnIcon />
                            <div className="address">
                                <h3>RS-Car Wash</h3>
                                <span>1122 CTM, Ahmedabad</span>
                                <p><strong>Call:</strong> +91 9911100022</p>
                            </div>
                        </div>
                        <div className="locationPoint">
                            <LocationOnIcon />
                            <div className="address">
                                <h3>RS-Car Wash</h3>
                                <span>1123 Raipur, Ahmedabad</span>
                                <p><strong>Call:</strong> +91 9911100022</p>
                            </div>
                        </div>
                        <div className="locationPoint">
                            <LocationOnIcon />
                            <div className="address">
                                <h3>RS-Car Wash</h3>
                                <span>1124 Vatva, Ahmedabad</span>
                                <p><strong>Call:</strong> +91 9911100022</p>
                            </div>
                        </div>
                        <div className="locationPoint">
                            <LocationOnIcon />
                            <div className="address">
                                <h3>RS-Car Wash</h3>
                                <span>1125 Khokhra, Ahmedabad</span>
                                <p><strong>Call:</strong> +91 9911100022</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feedback">
                    <div className="feedbackForm">
                        <h2>Feedback Form</h2>
                        <input type="text" placeholder='Enter Your Name' onChange={handleName} value={name} />
                        <input type="email" placeholder='Email: abc@gmail.com' onChange={handleEmail} value={email} />
                        <textarea name="desc" id="desc" cols="43" rows="7" onChange={handleDesc} placeholder='Please provide your feedback here...' />
                        <button type='submit' onClick={handleFeedback}>Send Feedback</button>
                    </div>
                </div>
            </div>
            <div className="blankLocSpace" />
            <ToastContainer position="bottom-right" theme="colored" />
        </>
    );
};

export default Location;
