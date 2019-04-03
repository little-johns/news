const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js')

<<<<<<< HEAD
const News = require('../database/dbdata1.js');
=======
const News = require('../database/dbdata.js');
>>>>>>> master

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static(__dirname + '/../client/dist'));


app.get('/data', function (req, res) {
  db.get((data) => {
    res.status(200).json(data);
  })

 });

<<<<<<< HEAD
 app.get('/data1/:query', (req, res) => {
  var query = req.params.query;
  News.find({name : req.params.query}, (err, data) => {
      if(err) { 
          throw err;
      }
          res.send(JSON.stringify(data))
  });
})
=======
// app.get('/data1', (req, res) => {
//   News.find((err, result) => {
//     if (err) console.log('err');
//     res.status(200).send(result);
//   });
// });
>>>>>>> master

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
