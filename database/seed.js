const faker = require('faker');
const fs = require('fs');

const stream = fs.createWriteStream('./test.csv');

function tickerMaker () {
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var tickers = [];
  for (let i = 0; i < alphabet.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      for (let k = 0; k < alphabet.length; k++) {
        for (let l = 0; l < alphabet.length; l++) {
          for (let n = 0; n < alphabet.length; n++) {
            tickers.push( alphabet[i] + alphabet[j] + alphabet[k] + alphabet[l] + alphabet[n] );
          }
        }
      }
    }
  }
  return tickers;
}
function dataEntry (ticker, count) {
  var threeNewsArticles = [
  count,
  ticker,
  `${faker.commerce.department()}.com`,
  `${faker.date.recent()}`,
  `${faker.image.business()}`,
  `${faker.lorem.word()} ${faker.hacker.ingverb()} ${faker.finance.accountName()}`,
  `${faker.random.words()}`,
  `${faker.name.findName()}`,
   Math.floor(Math.random() * 360),

  `${faker.commerce.department()}.com`,
  `${faker.date.recent()}`,
  `${faker.image.business()}`,
  `${faker.lorem.word()} ${faker.hacker.ingverb()} ${faker.finance.accountName()}`,
  `${faker.random.words()}`,
  `${faker.name.findName()}`,
  Math.floor(Math.random() * 360),

  `${faker.commerce.department()}.com`,
  `${faker.date.recent()}`,
  `${faker.image.business()}`,
  `${faker.lorem.word()} ${faker.hacker.ingverb()} ${faker.finance.accountName()}`,
  `${faker.random.words()}`,
  `${faker.name.findName()}`,
  Math.floor(Math.random() * 360)
  ]
  return threeNewsArticles;
};
function createData () {

  var tickers = tickerMaker();
  var count = 10;
  write();
  function write() {
    var ok = true;
    do {
      count--;
      if (count === 1) {
        // last time to iterate
        var threeArticlesJoined = dataEntry(tickers[count], count).join(',');
        stream.write(threeArticlesJoined + '\n', 'UTF-8', () => {
          console.log('CSV has 10 Million', count);
          ok = false
        })
      }
      else {
        var threeArticlesJoined = dataEntry(tickers[count], count).join(',');
        ok = stream.write(threeArticlesJoined + '\n', 'UTF-8');
      }
    } while (count > 1 && ok);
    if (count > 1) {
      // console.log('in drain. Count = ', count)
      stream.once('drain', write);
    }
  }
};
createData()
/*
data.csv format
{
'id': count,
'name': ticker,
'news': [
  {
    'source': `${faker.commerce.department()}.com`,
    'date': faker.date.recent(),
    'image': faker.image.business(),
    'title': `${faker.company.companyName()} ${faker.hacker.ingverb()} ${faker.finance.accountName()}`,
    'body': faker.random.words(),
    'name': faker.name.findName(),
    'view': Math.floor(Math.random() * 360),
  }
}
INITIAL DATAENTRY FORMAT
function dataEntry (ticker, count) {
  var threeNewsArticles = {
  'id': count,
  'name': ticker,

  'source1': `${faker.commerce.department()}.com`,
  'date1': faker.date.recent(),
  'image1': faker.image.business(),
  'title1': `${faker.company.companyName()} ${faker.hacker.ingverb()} ${faker.finance.accountName()}`,
  'body1': faker.random.words(),
  'name1': faker.name.findName(),
  'view1': Math.floor(Math.random() * 360),

  'source2': `${faker.commerce.department()}.com`,
  'date2': faker.date.recent(),
  'image2': faker.image.business(),
  'title2': `${faker.company.companyName()} ${faker.hacker.ingverb()} ${faker.finance.accountName()}`,
  'body2': faker.random.words(),
  'name2': faker.name.findName(),
  'view2': Math.floor(Math.random() * 360),

  'source3': `${faker.commerce.department()}.com`,
  'date3': faker.date.recent(),
  'image3': faker.image.business(),
  'title3': `${faker.company.companyName()} ${faker.hacker.ingverb()} ${faker.finance.accountName()}`,
  'body3': faker.random.words(),
  'name3': faker.name.findName(),
  'view3': Math.floor(Math.random() * 360),
  */

  // CREATE TABLE newsEntries (
  //   _id integer UNIQUE NOT NULL,
  //   name varchar (50) NOT NULL,
  //   source1 varchar (30) NOT NULL,
  //   date1 varchar (100) NOT NULL,
  //   image1 varchar (200) NOT NULL,
  //   title1 varchar (100) NOT NULL,
  //   body1  varchar (120) NOT NULL,
  //   name1  varchar (50) NOT NULL,
  //   views1 smallint NOT NULL,      
  //   source2 varchar (30) NOT NULL,
  //   date2 varchar (100) NOT NULL,
  //   image2 varchar (200) NOT NULL,
  //   title2 varchar (100) NOT NULL,
  //   body2  varchar (120) NOT NULL,
  //   name2  varchar (50) NOT NULL,
  //   views2 smallint NOT NULL,      
  //   source3 varchar (30) NOT NULL,
  //   date3 varchar (100) NOT NULL,
  //   image3 varchar (200) NOT NULL,
  //   title3 varchar (100) NOT NULL,
  //   body3  varchar (120) NOT NULL,
  //   name3  varchar (50) NOT NULL,
  //   views3 smallint NOT NULL
  //   )