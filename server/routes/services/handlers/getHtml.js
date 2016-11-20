function getHtml (db,req,res) {

	const title = "Services"
	db.collection("serviceproduct")
			.find( { "type": "servicio" } )
			.toArray()
			.then( data => res.render('services', { title, data } ))
			//.then( () => db.close() )
			.catch( err => console.log(err) )
}

module.exports = getHtml;