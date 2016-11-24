const mongoose = require('mongoose')

mongoose.Promise = global.Promise;

const ENVIRONMENT = process.env.ENVIRONMENT || 'development';
const urlDB = "mongodb://localhost:27017/curlingthecurl";

if (ENVIRONMENT === 'production') {
	urlDB = 'mongodb://admin:admin12345@ds135797.mlab.com:35797/curlingthecurl';
}

const db = mongoose.connection;
db.on('error', () => console.log('connection error:') );
db.once('open', () => console.log("We're connected") );

mongoose.connect( urlDB );

module.exports = mongoose;
