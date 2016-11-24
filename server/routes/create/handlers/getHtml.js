const article = require('../../../models/articles')

function getHtml (req,res) {

	const title = "Create"

	article.find()
		.then( articles => res.render('create', { title, articles } ))
		.catch( err => new Error(err) )

	// db.collection("articles")
	// 		.find()
	// 		.toArray()
	// 		.then( data => res.render('create', { title, data } ))
	// 		//.then( () => db.close() )
	// 		.catch( err => console.log(err) )	
}


module.exports = getHtml;