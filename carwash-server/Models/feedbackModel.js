const mongoose = require('mongoose');
const feedbackSchema = require('../Schemas/feedbackSchema');

module.exports = mongoose.model("Feed", feedbackSchema);