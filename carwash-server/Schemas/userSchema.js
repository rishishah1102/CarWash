const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
    },
    email: {
        type: String, 
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String, 
        required: true,
        unique: true
    },
    typeOfService: [
        {
            service: {
                type: String
            },
            serviceDate: {
                type: String
            },
            serviceTime: {
                type: String
            }
        }
    ]
});

module.exports = userSchema;