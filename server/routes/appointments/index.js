const express = require('express');
const router = express.Router();

const getHtml = require('./handlers/getHtml');
const showAppointments = require('./handlers/showAppointments');

router.get('/', getHtml )
router.get('/show/:dateAppointment', showAppointments )

module.exports = router;