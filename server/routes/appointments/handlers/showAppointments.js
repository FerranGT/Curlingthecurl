const appointment = require('../../../models/appointments')

function showAppointments (req,res) {


	const { dateAppointment } = req.params;

	const filter = { date:+dateAppointment }
	console.log(filter);

	appointment.find( filter )
		.then( appointments => {
			console.log(appointments)
			res.json(appointments)
		})
		.catch( err => new Error(err) )
}

module.exports = showAppointments;