
function getHtml (db,req,res) {

	const title = "Create"

	db.collection("serviceproduct")
			.find()
			.toArray()
			.then( data => res.render('create', { title, data } ))
			//.then( () => db.close() )
			.catch( err => console.log(err) )	
}


module.exports = getHtml;