function getArticles (db,req,res) {
	db.collection("serviceproduct")
		.find( { } )
		.toArray()
		.then( data => res.json(data))
		//.then( () => db.close() )
		.catch( err => console.log(err))
}

module.exports = getArticles;