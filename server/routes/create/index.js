const express = require('express');
const router = express.Router();


const getHtml = require('./handlers/getHtml');
const postServiceProduct = require('./handlers/postServiceProduct');


function getRouter() {

	router.get('/', getHtml )
	router.post('/', postServiceProduct )

	return router;

}

module.exports = getRouter;