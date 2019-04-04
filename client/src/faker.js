var faker = require('faker');
var fs = require('fs');
function datas(){
var date = faker.date.past();
var source = faker.internet.domainName();
var body = faker.lorem.sentences();
var title = faker.lorem.words();
var image = faker.image.transport();
var date1 = faker.date.past();
var source1 = faker.internet.domainName();
var body1 = faker.lorem.sentences();
var title1 = faker.lorem.words();
var image1 = faker.image.technics();
var date2 = faker.date.past();
var source2 = faker.internet.domainName();
var body2 = faker.lorem.sentences();
var title2 = faker.lorem.words();
var image2 = faker.image.city();
var fake = {
    name: "ABC",
    news: [{
      source: source,
      date: date,
      image: image,
      title: title,
      body: body,
      view : Math.floor(287*Math.random())
    },{
        source: source2,
        date: date2,
        image: image2,
        title: title2,
        body: body2,
        view : Math.floor(287*Math.random())
      },{
        source: source1,
        date: date1,
        image: image1,
        title: title1,
        body: body1,
        view : Math.floor(287*Math.random())
      }]
}
return fake;
}

var seed = function(){
    var data =[];
    for( var i = 0 ; i < 100 ; i++){
        data.push(datas());
    }
    return data;
}

fs.appendFile('mynewfile12.txt', JSON.stringify(seed()), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
