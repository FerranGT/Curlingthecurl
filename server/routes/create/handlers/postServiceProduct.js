const Article = require('../../../models/articles')

function postServiceProduct (req,res) {

	let articleData = req.body;

	let myArticle = new Article(articleData);
	
	myArticle.save()
		.then( data => res.redirect('/create'))
		.catch(console.log)

	// //console.log (req.body);
	// db.collection("articles").insert(newElem)
	// .then( data => res.redirect('/create'));
}

module.exports = postServiceProduct;