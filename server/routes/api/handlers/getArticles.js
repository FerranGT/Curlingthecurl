const article = require('../../../models/articles')

function getArticles (req,res) {

	article.find()
		.then( articles => res.json(articles) )
		.catch( err => new Error(err) )

	// db.collection("articles")
	// 	.find( { } )
	// 	.toArray()
	// 	.then( data => res.json(data))
	// 	//.then( () => db.close() )
	// 	.catch( err => console.log(err))
}

module.exports = getArticles;