const article = require('../../../models/articles')

function getHtml (req,res) {

	const title = "Services"

	article.find()
		.then( articles => res.render('services', { title, articles } ))
		.catch( err => new Error(err) )

	// db.collection("articles")
	// 		.find( { "type": "servicio" } )
	// 		.toArray()
	// 		.then( data => res.render('services', { title, data } ))
	// 		//.then( () => db.close() )
	// 		.catch( err => console.log(err) )
}

module.exports = getHtml;