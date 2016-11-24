const article = require('../../../models/articles')

function getHtml (req,res) {

	const title = "Appointments"

	article.find()
		.then( articles => res.render('appointments', { title, articles } ))
		.catch( err => new Error(err) )

// 	db.collection("serviceproduct")
// 			.find()
// 			.toArray()
// 			.then( data => res.render('appointments', { title, data } ))
// 			//.then( () => db.close() )
// 			.catch( err => console.log(err) )	
}


module.exports = getHtml;