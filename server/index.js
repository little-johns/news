const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js')

const News = require('../database/dbdata1.js');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static(__dirname + '/../public/dist'));


app.get('/data', function (req, res) {
  db.get((data) => {
    res.status(200).json(data);
  })

 });

 app.get('/data1/:query', (req, res) => {
  var query = req.params.query;
  News.find({name : req.params.query}, (err, data) => {
      if(err) { 
          throw err;
      }
          res.send(JSON.stringify(data))
  });
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
