function getHtml (db,req,res) {

	const title = "Date"
	db.collection("serviceproduct")
			.find()
			.toArray()
			.then( data => res.render('date', { title, data } ))
			//.then( () => db.close() )
			.catch( err => console.log(err) )	
}


module.exports = getHtml;