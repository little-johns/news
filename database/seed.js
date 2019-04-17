const faker = require('faker');

var tickerMaker = function() {
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const tickers = [];
  for (let i = 0; i < alphabet.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      for (let k = 0; k < alphabet.length; k++) {
        for (let l = 0; l < alphabet.length; l++) {
          for (let n = 0; n < alphabet.length; n++) {
            tickers.push(alphabet[i] + alphabet[j] + alphabet[k] + alphabet[l] + alphabet[n]);
          }
        }
      }
    }
  } 
  return tickers;
}
var tickersArr = tickerMaker();
/*
use chris's array of tickers to build data. 
It will be an array to 10 mil
*/
var allData = [];
for (var i = 1; i < 10000000; i++) {
  allData.push({
    id: i,
    name: tickersArr[i-1],
    news: [{
      source: `${faker.commerce.department()}.com`,
      date: faker.date.recent(),
      image: faker.image.business(),
      title: `${faker.company.companyName()} ${faker.hacker.ingverb()} ${faker.finance.accountName()}`,
      body: faker.random.words(),
      name: faker.name.findName(),
      view: Math.floor(Math.random() * 360)
    }]
  })
}
console.log("allData = ", allData);
