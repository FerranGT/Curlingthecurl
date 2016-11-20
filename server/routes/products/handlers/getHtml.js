function getHtml (db,req,res) {

	const title = "Products"
	db.collection("serviceproduct")
			.find( { "type": "producto" } )
			.toArray()
			.then( data => res.render('products', { title, data } ))
			//.then( () => db.close() )
			.catch( err => console.log(err) )	
}


module.exports = getHtml;