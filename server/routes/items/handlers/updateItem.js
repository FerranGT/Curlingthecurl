const Article = require('../../../models/articles')

function updateItem (req,res) {
	
	const { _id, title, desc, price, type, url } = req.body;

	Article.findByIdAndUpdate( _id, { title, desc, price, type, url } )
		.then( data => res.redirect('/create'))
		.catch(console.log)
}

module.exports = updateItem;