const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../Models/userModel');
const Feed = require('../Models/feedbackModel');
const verifyToken = require('../MiddleWare/auth');
const mongoose = require('mongoose');

router.post('/', async (req, res) => {
    const data = req.body;
    const user = new User(data);
    try {
        const foundUser = await User.findOne({ phoneNumber: data.phoneNumber, email: data.email });
        if (foundUser) {
            const token = jwt.sign(
                { id: foundUser._id, phoneNumber: foundUser.phoneNumber, email: foundUser.email },
                process.env.TOKEN_KEY,
                { expiresIn: '5d' }
            );
            res.status(200).send({ "message": "User Already exists, Successfully Logged-In", "token": token })
        } else {
            const saveUser = await user.save();
            const token = jwt.sign(
                { id: saveUser._id, phoneNumber: saveUser.phoneNumber, email: saveUser.email },
                process.env.TOKEN_KEY,
                { expiresIn: '5d' }
            );
            res.status(200).send({ "message": "Successfully Registered", "token": token });
        }
    } catch (err) {
        res.status(500).send({ error: err });
    }
});

router.get('/navbar', verifyToken, async (req, res) => {
    const phoneNum = req.user.phoneNumber;
    const email = req.user.email;
    try {
        const findUser = await User.findOne({ phoneNumber: phoneNum, email: email });
        res.status(200).send({ "user": findUser });
    } catch (err) {
        res.status(500).send({ error: err });
    }
});

router.post('/navbar', verifyToken, async (req, res) => {
    const phoneNum = req.user.phoneNumber;
    const email = req.user.email;
    const data = req.body;
    try {
        const findUser = await User.findOne({ phoneNumber: phoneNum, email: email });
        if (findUser) {
            try {
                const updateUser = await User.updateOne({ phoneNumber: phoneNum, email: email }, { $push: { typeOfService: data } });
                const accountSid = process.env.SID;
                const authToken = process.env.TWToken;
                const client = require("twilio")(accountSid, authToken);
                client.messages
                    .create({
                        body: "Your Service has been confirmed by CarWash on " + data.serviceDate + " at " + data.serviceTime,
                        from: "+16074007566",
                        to: "+91" + phoneNum
                    })
                    .then(message => console.log(message.sid));
                res.status(200).send({ "message": "Service Booked Successfully" });
            } catch (error) {
                res.status(500).send({ error: err });
            }
        }
    } catch (err) {
        res.status(500).send({ error: err });
    }
});

router.get('/feedback', verifyToken, async (req, res) => {
    const phoneNum = req.user.phoneNumber;
    const email = req.user.email;
    try {
        const findUser = await User.findOne({ phoneNumber: phoneNum, email: email });
        res.status(200).send({ "user": findUser });
    } catch (err) {
        res.status(500).send({ error: err });
    }
});

router.post("/feedback", verifyToken, async (req, res) => {
    const data = req.body;
    const feed = new Feed(data);
    try {
        const saveFeedback = await feed.save();
        res.status(200).send({ message: "Feedback is delieved successfully" });
    } catch (err) {
        res.status(500).send({ error: err });
    }
})

module.exports = router;