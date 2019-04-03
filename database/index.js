const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/news';
mongoose.Promise = global.Promise;
mongoose.connect(mongoUri, { useNewUrlParser: true });


const db = mongoose.connection;


module.exports = db;
