const express = require('express');
const router = express.Router();


const getHtml = require('./handlers/getHtml');


function getRouter(db) {

	router.get('/', getHtml.bind(null, db) )

	return router;

}

module.exports = getRouter;