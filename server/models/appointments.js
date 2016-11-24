const mongoose = require('mongoose')

const collection = 'appointments';

// Schema definition
const appointmentSchema = new mongoose.Schema({
	date: String,
	time: Number,
},
{ collection });

// Model definition
var appointment = mongoose.model('appointment', appointmentSchema);

module.exports = appointment