const Appointment = require('../../../models/appointments')

function addAppointment (req,res) {

	console.log("addAppointment server")
	console.log(req.body)

	let appoint = req.body;

	let newAppoint = new Appointment(appoint);
	
	newAppoint.save()
		.then( data => res.send(200))
		.catch(console.log)
	
}


module.exports = addAppointment;