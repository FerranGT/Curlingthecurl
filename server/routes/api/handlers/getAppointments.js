const appointment = require('../../../models/appointments')

function getAppointments (req,res) {

	appointment.find()
		.then( appointments => res.json(appointments) )
		.catch( err => new Error(err) )
		
	// db.collection("appointments")
	// 	.find( { } )
	// 	.toArray()
	// 	.then( data => res.json(data))
	// 	//.then( () => db.close() )
	// 	.catch( err => console.log(err))
}

module.exports = getAppointments;