const db  = require('./index.js');
const News = require('./news.js');

const data = [];

var bulk = db.users.initializeOrderedBulkOp();

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
  `${faker.company.companyName()} ${faker.hacker.ingverb()} ${faker.finance.accountName()}`,
  `${faker.random.words()}`,
  `${faker.name.findName()}`,
   Math.floor(Math.random() * 360),

  `${faker.commerce.department()}.com`,
  `${faker.date.recent()}`,
  `${faker.image.business()}`,
  `${faker.company.companyName()} ${faker.hacker.ingverb()} ${faker.finance.accountName()}`,
  `${faker.random.words()}`,
  `${faker.name.findName()}`,
  Math.floor(Math.random() * 360),

  `${faker.commerce.department()}.com`,
  `${faker.date.recent()}`,
  `${faker.image.business()}`,
  `${faker.company.companyName()} ${faker.hacker.ingverb()} ${faker.finance.accountName()}`,
  `${faker.random.words()}`,
  `${faker.name.findName()}`,
  Math.floor(Math.random() * 360)
  ]
  //add new line here
  return threeNewsArticles;
};
function createData () {

  var tickers = tickerMaker();
  var count = 10000001;
  write();
  function write() {
    var ok = true;
    do {
      count--;
      if (count === 0) {
        // last time!
        var threeArticlesJoined = dataEntry(tickers[count], count).join('|');
          console.log('MAH MAN, CSV HAS 10 MIL', count);
          ok = false
          //need to find a way to end the loop here
      }
      else {
        var threeArticlesJoined = dataEntry(tickers[count], count).join('|');
        ok = stream.write(threeArticlesJoined + '\n', 'UTF-8');
      }
    } while (count > 0 && ok);
    if (count > 0) {
      console.log('in drain. Count = ', count)
      // had to stop early!
      // write some more once it drains
      stream.once('drain', write);
    }
  }
};
createData()
