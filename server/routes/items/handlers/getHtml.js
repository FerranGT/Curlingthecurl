const ObjectID = require('mongodb').ObjectID

function getHtml (db,req,res) {

	const title = "Update"
	const id = req.params.id;

	db.collection("serviceproduct")
		.find({ _id: ObjectID(id) })
		.toArray()
		.then( ([data]) => {
			res.render('update', { title, data } )
		})
		//.then( () => db.close() )
		.catch( err => console.log(err) )

}


module.exports = getHtml;