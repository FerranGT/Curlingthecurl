//Ejecutar daemon: mongod --dbpath ~/data/db

const express = require('express')
const db = require('./server/db');
const MongoClient = require('mongodb').MongoClient

const bodyparser = require('body-parser')

const http = require('http');
const path = require('path');

const getRouterProducts = require('./server/routes/products');
const getRouterCreate = require('./server/routes/create');
const getRouterServices = require('./server/routes/services');
const getRouterItems = require('./server/routes/items');
const routerAppointments = require('./server/routes/appointments');
const getRouterApi = require('./server/routes/api');

//const ENVIRONMENT = process.env.ENVIRONMENT || 'development';

// const urlDB = "mongodb://localhost:27017/curlingthecurl";

// if (ENVIRONMENT === 'production') {
// 	urlDB = 'mongodb://admin:admin12345@ds135797.mlab.com:35797/curlingthecurl';
// }

const PORT = 3000

const app = express()

//const db = MongoClient.connect(urlDB)

//db.then((db) => {

	app.set('view engine', 'pug')
	app.set('views', path.join(__dirname , '/server/views'));
	app.use( express.static('./client/public') )
	app.use( bodyparser.urlencoded({ extended: false }) )

	
	app.use('/products', getRouterProducts() )
	app.use('/services', getRouterServices() )
	app.use('/create', getRouterCreate() )
	app.use('/items', getRouterItems() )
	app.use('/appointments', routerAppointments )
	app.use('/api', getRouterApi() )

	app.get('/', (req,res) => {
		const title = "Curling The Curl Styling"
		res.render('index', { title } )
	})

	app.listen(PORT, () => console.log(`Listening on port ${PORT}...`) )

//})
// .catch(function(err) {
// 	throw new Error("something failed in the connection");
// })


