
function getHtml (req,res) {

	const title = "Create"
	res.render('create', { title } )
}


module.exports = getHtml;