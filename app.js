//Ejecutar daemon: mongod --dbpath ~/data/db

const express = require('express')
const db = require('./server/db');
const MongoClient = require('mongodb').MongoClient

const bodyparser = require('body-parser')

const http = require('http');
const path = require('path');

const routerProducts = require('./server/routes/products');
const routerCreate = require('./server/routes/create');
const routerServices = require('./server/routes/services');
const routerItems = require('./server/routes/items');
const routerAppointments = require('./server/routes/appointments');
const routerApi = require('./server/routes/api');

const PORT = 3000

const app = express()


app.set('view engine', 'pug')
app.set('views', path.join(__dirname , '/server/views'));

app.use( express.static('./client/public') )
app.use( bodyparser.urlencoded({ extended: false }) )
app.use( bodyparser.json() )

app.use('/products', routerProducts )
app.use('/services', routerServices )
app.use('/create', routerCreate )
app.use('/items', routerItems )
app.use('/appointments', routerAppointments )
app.use('/api', routerApi )


app.get('/', (req,res) => {
	const title = "Curling The Curl Styling"
	res.render('index', { title } )
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`) )




