function getAppointments (db,req,res) {
	db.collection("appointments")
		.find( { } )
		.toArray()
		.then( data => res.json(data))
		//.then( () => db.close() )
		.catch( err => console.log(err))
}

module.exports = getAppointments;