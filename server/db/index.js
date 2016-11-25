"use strict"

const mongoose = require('mongoose')

mongoose.Promise = global.Promise;

const ENVIRONMENT = process.env.ENVIRONMENT || 'development';

let urlDB = process.env.URL_DB || "mongodb://localhost:27017/curlingthecurl"

const db = mongoose.connection;
db.on('error', () => console.log('connection error:') );
db.once('open', () => console.log("We're connected") );

mongoose.connect( urlDB );

module.exports = mongoose;
