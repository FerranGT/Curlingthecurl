const ObjectID = require('mongodb').ObjectID

function updateItem (db,req,res) {

	const { _id, title, desc, price, type, url } = req.body;
	console.log ("handler: " + req.body);
	db.collection("serviceproduct")
	.update( 
		{ _id: ObjectID(_id) }, 
		{ $set: { title, desc, price, type, url } }
	)
	.then( data => res.render('update', { title, data } ))
}

module.exports = updateItem;