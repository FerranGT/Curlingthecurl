const mongoose = require('mongoose')

const collection = 'articles';

// Schema definition
const articleSchema = new mongoose.Schema({
	title: String,
	price: Number,
	type: String,
	desc: String,
	url: String,
},
{ collection });

// Model definition
var article = mongoose.model('article', articleSchema);

module.exports = article
