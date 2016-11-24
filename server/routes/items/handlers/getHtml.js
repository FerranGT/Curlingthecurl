const article = require('../../../models/articles')

function getHtml (req,res) {

	const title = "Update"
	const id = req.params.id;

	article.findById( id )
		.then( (data) => {
	 		res.render('update', { title, data } )
	 	})
		.catch(console.log)
	
	// db.collection("articles")
	// 	.find({ _id: ObjectID(id) })
	// 	.toArray()
	// 	.then( ([data]) => {
	// 		res.render('update', { title, data } )
	// 	})
	// 	//.then( () => db.close() )
	// 	.catch( err => console.log(err) )

}


module.exports = getHtml;