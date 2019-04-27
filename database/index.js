const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/news';
mongoose.Promise = global.Promise;
mongoose.connect(mongoUri, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!")
});

module.exports = db;
