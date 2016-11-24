const Article = require('../../../models/articles')

function updateItem (req,res) {
	
	const { id } = req.params;

	Article.findByIdAndUpdate( id )
		.then( data => res.redirect('/create'))
		.catch(console.log)

	// const { _id, title, desc, price, type, url } = req.body;
	// db.collection("articles")
	// .update( 
	// 	{ _id: ObjectID(_id) }, 
	// 	{ $set: { title, desc, price, type, url } }
	// )
	// .then( data => res.redirect('/create'));
}

module.exports = updateItem;