const express = require('express');
const router = express.Router();

const getArticles = require('./handlers/getArticles');
const getAppointments = require('./handlers/getAppointments');

router.get('/articles/', getArticles )
router.get('/appointments/', getAppointments  )

module.exports = router;