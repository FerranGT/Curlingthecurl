const express = require('express');
const router = express.Router();

const getArticles = require('./handlers/getArticles');
const getAppointments = require('./handlers/getAppointments');


function getRouter(db) {

	router.get('/articles/', getArticles.bind(null, db)  )
	router.get('/appointments/', getAppointments.bind(null, db)  )

	return router;

}

module.exports = getRouter;