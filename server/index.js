require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js')

const News = require('../database/news.js');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static(__dirname + '/../public/dist'));

//this needs to search by ID
app.get('/id/:query', function (req, res) {
  var query = req.params.query;
  News.find({'id': req.params.query}, (err, data) => {
    if (err) {
      res.sendStatus(500);
    }
    res.send(JSON.stringify(data));
  })
 });

 app.get('/ticker/:query', (req, res) => {
  var query = req.params.query;
  News.find({' name': query}, (err, data) => {
      if(err) { 
        res.sendStatus(500);
      }
      res.send(JSON.stringify(data))
  });
})

app.post('/', (req, res) => {

})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
