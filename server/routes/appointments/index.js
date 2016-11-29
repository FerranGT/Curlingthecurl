const express = require('express');
const router = express.Router();

const getHtml = require('./handlers/getHtml');
const showAppointments = require('./handlers/showAppointments');
const addAppointment = require('./handlers/addAppointment');

router.get('/', getHtml )
router.get('/show/:dateAppointment', showAppointments )
router.post('/', addAppointment )

module.exports = router;