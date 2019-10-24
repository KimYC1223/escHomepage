module.exports = function (app) {
  var request       = require('request')
  var cheerio       = require('cheerio')
  var encodeURL     = require('encodeURL')

  var trainInfoURL = 'http://swopenapi.seoul.go.kr/api/subway/sample/xml/realtimeStationArrival/1/5/%ED%99%94%EC%A0%84'
  var encodedURL = encodeURL(trainInfoURL)
  console.log(trainInfoURL);
  console.log(encodedURL);

  app.set('view engine','ejs');
  app.get('/',(req,res) => {
    let testVar = 'A'
    request(encodedURL, (error,response,html) => {
      if (error) throw error;

      console.log(html);
      testVar = 'B'
    })
    res.render(__dirname+'/HTML_CSS_JS/index.ejs',{test:testVar})
  })

  app.set('view engine','ejs');
  app.post( '/loginProcess',(req,res) => {
    res.render(__dirname+'/loginProcess.ejs',{id:req.body.id});
  });

  app.set('view engine','ejs');
  app.get('/mainPage', (req,res) => {
    res.render(__dirname+'/mainPage.ejs');
  });

}
