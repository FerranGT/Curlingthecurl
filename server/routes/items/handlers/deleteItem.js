const Article = require('../../../models/articles')

function deleteItem (req,res) {

	const { id } = req.params;

	Article.findByIdAndRemove( id )
		.then(res.sendStatus(200))
		.catch(console.log)



	// const id = req.params.id;
	// console.log ("handler: " + id);
	// db.collection("articles")
	// .remove( { _id: ObjectID(id) })
	// .then(res.sendStatus(200))
}

module.exports = deleteItem;