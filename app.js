//Ejecutar daemon: mongod --dbpath ~/data/db

const express = require('express')
const MongoClient = require('mongodb').MongoClient

const bodyparser = require('body-parser')

const http = require('http');
const path = require('path');

const getRouterProducts = require('./server/routes/products');
const getRouterCreate = require('./server/routes/create');
const getRouterServices = require('./server/routes/services');
const getRouterItems = require('./server/routes/items');
const getRouterAppointments = require('./server/routes/appointments');
const getRouterApi = require('./server/routes/api');


const url = "mongodb://localhost:27017/curlingthecurl"

const PORT = 3000

const app = express()

var db = MongoClient.connect(url)

db.then((db) => {

	app.set('view engine', 'pug')
	app.set('views', path.join(__dirname , '/server/views'));
	app.use( express.static('./client/public') )
	app.use( bodyparser.urlencoded({ extended: false }) )

	
	app.use('/products', getRouterProducts(db) )
	app.use('/services', getRouterServices(db) )
	app.use('/create', getRouterCreate(db) )
	app.use('/items', getRouterItems(db) )
	app.use('/appointments', getRouterAppointments(db) )
	app.use('/api', getRouterApi(db) )

	app.get('/', (req,res) => {
		const title = "Curling The Curl Styling"
		res.render('index', { title } )
	})

	app.listen(PORT, () => console.log(`Listening on port ${PORT}...`) )

})
.catch(function(err) {
	throw new Error("something failed in the connection");
})


