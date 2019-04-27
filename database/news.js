
const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const newsSchema = new mongoose.Schema({
  id: Number,
  name: String,

  source1: String,
  date1: String,
  image1: String,
  title1: String,
  body1: String,
  name1: String,
  view1: Number,

  source2: String,
  date2: String,
  image2: String,
  title2: String,
  body2: String,
  name2: String,
  view2: Number,

  source3: String,
  date3: String,
  image3: String,
  title3: String,
  body3: String,
  name3: String,
  view3: Number

})

const News = mongoose.model('News', newsSchema);

module.exports = News;
