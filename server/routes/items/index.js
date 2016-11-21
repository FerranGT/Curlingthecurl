const express = require('express');
const router = express.Router();


const deleteItem = require('./handlers/deleteItem');
const updateItem = require('./handlers/updateItem');
const getHtml = require('./handlers/getHtml');


function getRouter(db) {

	router.delete('/:id', deleteItem.bind(null, db) )
	router.put('/:id', updateItem.bind(null, db) )
	router.get('/update/:id', getHtml.bind(null, db) )

	return router;

}

module.exports = getRouter;