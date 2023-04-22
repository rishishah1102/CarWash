import React, { useState, useEffect } from 'react';
import '../CSS/Signup.css';
import instance from '../Utils/axios';
import { validation } from '../Utils/userValidation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Signup() {

  const Navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('carWashToken')) {
      Navigate('/home');
    }
  }, [Navigate]);

  // useStates for handling data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleNumber = (e) => {
    setNumber(e.target.value);
  };

  // validating the user data and passing the data to backend
  const handleRegister = async (e) => {
    e.preventDefault();

    const userDetails = {
      name: name,
      email: email,
      phoneNumber: number
    }

    // Validating the user details
    let valid;
    try {
      valid = await validation.validate(userDetails, { abortEarly: false });
    } catch (err) {
      toast.error("Invalid Name or E-Mail or Phone-Number")
    }

    // Saving the data into database
    if (valid) {
      instance.post("/", valid)
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem("carWashToken", res.data.token);
            toast.success("Successfully Registered!");
            setTimeout(() => {
              Navigate('/home');
            }, 3000);
          }
        })
        .catch((err) => {
          toast.error("Server Issues, Please try again later");
        });
    }
  }

  return (
    // Register Page
    <div className='signUp'>

      <div className="signUpContainer">

        <div className="signUpHeader">
          <h1>Register</h1>
        </div>

        <div className="signUpBody">
          <input type="text" placeholder='Your Name' onChange={handleName} />
          <input type="email" placeholder='abc@gmail.com' onChange={handleEmail} />
          <input type="number" placeholder='Your Mobile-Number' onChange={handleNumber} />
          <button type='submit' onClick={handleRegister}>Submit</button>
        </div>

        <div className="signUpFooter">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima omnis sed placeat? Vitae sapiente reiciendis!</p>
        </div>

      </div>

      <ToastContainer position="bottom-right" theme="colored" />
    </div>

  );
};

export default Signup;