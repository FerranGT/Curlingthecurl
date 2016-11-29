const mongoose = require('mongoose')

const collection = 'appointments';

// Schema definition
const appointmentSchema = new mongoose.Schema({
	date: Number,
	time: String,
	name: String,
	dateString: String,
	tlf: Number,
	free: Boolean
},
{ collection });

// Model definition
var appointment = mongoose.model('appointment', appointmentSchema);

module.exports = appointment