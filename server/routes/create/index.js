const express = require('express');
const router = express.Router();


const getHtml = require('./handlers/getHtml');
const postServiceProduct = require('./handlers/postServiceProduct');


function getRouter(db) {

	router.get('/', getHtml.bind(null, db) )
	router.post('/', postServiceProduct.bind(null, db)  )

	return router;

}

module.exports = getRouter;