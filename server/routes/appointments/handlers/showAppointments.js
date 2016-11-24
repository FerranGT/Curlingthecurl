const appointment = require('../../../models/appointments')

function showAppointments (req,res) {

	

	const { dateAppointment } = req.params;

	console.log(dateAppointment);

	appointment.find(dateAppointment)
		.then( appointments => res.json(appointments) )
		.catch( err => new Error(err) )
}

module.exports = showAppointments;