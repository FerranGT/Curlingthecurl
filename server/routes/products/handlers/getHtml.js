const article = require('../../../models/articles')

function getHtml (req,res) {

	const title = "Products"

	article.find()
		.then( articles => res.render('products', { title, articles } ))
		.catch( err => new Error(err) )

	// db.collection("articles")
	// 		.find( { "type": "producto" } )
	// 		.toArray()
	// 		.then( data => res.render('products', { title, data } ))
	// 		//.then( () => db.close() )
	// 		.catch( err => console.log(err) )	
}


module.exports = getHtml;