const express = require('express');
const router = express.Router();


const deleteItem = require('./handlers/deleteItem');
const updateItem = require('./handlers/updateItem');


function getRouter(db) {

	router.delete('/:id', deleteItem.bind(null, db) )
	router.put('/:id', updateItem.bind(null, db) )

	return router;

}

module.exports = getRouter;