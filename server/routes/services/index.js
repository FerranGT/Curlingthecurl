const express = require('express');
const router = express.Router();

const getHtml = require('./handlers/getHtml');

router.get('/', getHtml )

module.exports = router;