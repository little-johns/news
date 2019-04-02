const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js')

const News = require('../database/dbdata.js');

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

// app.get('/data1', (req, res) => {
//   News.find((err, result) => {
//     if (err) console.log('err');
//     res.status(200).send(result);
//   });
// });

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
