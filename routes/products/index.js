const express = require('express');
const router = express.Router();


const getHtml = require('./handlers/getHtml');
const getJson = require('./handlers/getJson');


function getRouter(db) {

	router.get('/', getHtml.bind(null, db) )
	router.get('/json', getJson.bind(null, db)  )

	return router;

}

module.exports = getRouter;