var express = require('express');
var router = express.Router();


var getHtml = require('./handlers/getHtml');
var postServiceProduct = require('./handlers/postServiceProduct');


function getRouter(db) {

	router.get('/', getHtml )
	router.post('/', postServiceProduct.bind(null, db)  )

	return router;

}

module.exports = getRouter;