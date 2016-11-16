
function postServiceProduct (db,req,res) {
	const newElem = req.body;
	//console.log (req.body);
	db.collection("serviceproduct").insert(newElem)
	.then( data => res.redirect('/create'));
}

module.exports = postServiceProduct;