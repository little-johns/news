const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/news';
mongoose.Promise = global.Promise;
mongoose.connect(mongoUri, { useNewUrlParser: true });

// const newsSchema = new mongoose.Schema({
//   name: String,
//   news: [{
//     source: String,
//     date: String,
//     image: String,
//     title: String,
//     body: String,
//     name: String,
//     // views: { type: Number, default: 0 },
//   }],
// });

// var News = mongoose.model('News', newsSchema);

const db = mongoose.connection;


module.exports = db;
