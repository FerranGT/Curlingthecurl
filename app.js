const express = require('express')
const MongoClient = require('mongodb').MongoClient
const bodyparser = require('body-parser')
const getRouterProducts = require('./routes/products');
const getRouterCreate = require('./routes/create');


const url = "mongodb://localhost:27017/curlingthecurl"

const PORT = 3000

const app = express()

var db = MongoClient.connect(url)

db.then((db) => {

	app.set('view engine', 'pug')
	app.use( express.static('public') )
	app.use( bodyparser.urlencoded({ extended: false }) )

	
	app.use('/products', getRouterProducts(db) )
	app.use('/create', getRouterCreate(db) )

	app.get('/', (req,res) => {
		const title = "Curling The Curl Styling"
		res.render('index', { title } )
	})

	app.listen(PORT, () => console.log(`Listening on port ${PORT}...`) )

})
.catch(function(err) {
	throw new Error("something failed in the connection");
})


