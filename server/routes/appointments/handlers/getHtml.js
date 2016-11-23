function getHtml (db,req,res) {

	const title = "Appointments"
	db.collection("serviceproduct")
			.find()
			.toArray()
			.then( data => res.render('appointments', { title, data } ))
			//.then( () => db.close() )
			.catch( err => console.log(err) )	
}


module.exports = getHtml;