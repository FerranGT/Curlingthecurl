const ObjectID = require('mongodb').ObjectID

function updateItem (db,req,res) {
	console.log ("body._id: " + req.body._id);
	console.log ("body.title: " + req.body.title);
	console.log ("body.desc: " + req.body.desc);
	console.log ("body.price: " + req.body.price);
	console.log ("body.type: " + req.body.type);
	console.log ("body.url: " + req.body.url);
	const { _id, title, desc, price, type, url } = req.body;
	console.log ("_id: " + _id);
	console.log ("title: " + title);
	console.log ("desc: " + desc);
	console.log ("price: " + price);
	console.log ("type: " + type);
	console.log ("url: " + url);
	db.collection("serviceproduct")
	.update( 
		{ _id: ObjectID(_id) }, 
		{ $set: { title, desc, price, type, url } }
	)
	.then( data => res.redirect('/create'));
}

module.exports = updateItem;