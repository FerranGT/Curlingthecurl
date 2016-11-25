const express = require('express');
const router = express.Router();


const getHtml = require('./handlers/getHtml');
const postServiceProduct = require('./handlers/postServiceProduct');

router.get('/', getHtml )
router.post('/', postServiceProduct )

module.exports = router;