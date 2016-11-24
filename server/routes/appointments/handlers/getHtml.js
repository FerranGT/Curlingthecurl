const appointment = require('../../../models/appointments')

function getHtml (req,res) {

	const title = "Appointments"

	appointment.find()
		.then( appointments => res.render('appointments', { title, appointments } ))
		.catch( err => new Error(err) )

// 	db.collection("serviceproduct")
// 			.find()
// 			.toArray()
// 			.then( data => res.render('appointments', { title, data } ))
// 			//.then( () => db.close() )
// 			.catch( err => console.log(err) )	
}


module.exports = getHtml;