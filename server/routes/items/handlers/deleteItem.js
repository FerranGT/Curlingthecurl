const ObjectID = require('mongodb').ObjectID

function deleteItem (db,req,res) {

	const id = req.params.id;
	console.log ("handler: " + id);
	db.collection("serviceproduct")
	.remove( { _id: ObjectID(id) })
	.then(res.sendStatus(200))
}

module.exports = deleteItem;