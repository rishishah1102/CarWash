const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    feedback: {
        type: String,
        required: true,
    }
});

module.exports = feedbackSchema;