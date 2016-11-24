const mongoose = require('mongoose')

const collection = 'appointments';

// Schema definition
const appointmentSchema = new mongoose.Schema({
	date: Number,
	time: Number,
},
{ collection });

// Model definition
var appointment = mongoose.model('appointment', appointmentSchema);

module.exports = appointment