const express = require('express');
const router = express.Router();

const deleteItem = require('./handlers/deleteItem');
const updateItem = require('./handlers/updateItem');
const getHtml = require('./handlers/getHtml');

router.delete('/:id', deleteItem )
router.post('/', updateItem )
router.get('/update/:id', getHtml )

module.exports = router;