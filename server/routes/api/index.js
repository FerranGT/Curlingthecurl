const express = require('express');
const router = express.Router();


const getArticles = require('./handlers/getArticles');
const getAppointments = require('./handlers/getAppointments');


function getRouter() {

	router.get('/articles/', getArticles )
	router.get('/appointments/', getAppointments  )

	return router;

}

module.exports = getRouter;