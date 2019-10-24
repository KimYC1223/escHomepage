module.exports = function (app) {
  var request       = require('request')
  var cheerio       = require('cheerio')
  var encodeURL     = require('encodeURL')

  var trainInfoURL = 'http://swopenapi.seoul.go.kr/api/subway/sample/xml/realtimeStationArrival/1/5/%ED%99%94%EC%A0%84'

  app.set('view engine','ejs');
  app.get('/',(req,res) => {
      res.render(__dirname+'/HTML_CSS_JS/index.ejs')
  })

  app.get('/template', (req,res) => {
    res.render(__dirname+'/HTML_CSS_JS/template.ejs')
  })


  app.get( '/getTrainInfo',(req,res) => {
    request(trainInfoURL,(error,response,html) => {
      if(error) throw error

      str = html.split('<row>')
      if (str.length < 1) {
        res.send('Error!');
      } else {
        let toPajuArr = []
        let toSeoulArr = []
        for(let i = 1; i < str.length ; i++){
          let stateMsg = ''; let offset = '';
          let arvlMsg2 = ''; let arvlMsg3 = ''
          let trainLineNm = ''
          try {
            arvlMsg2 = str[i].split('<arvlMsg2>')[1].split('</arvlMsg2>')[0]
            arvlMsg3 = str[i].split('<arvlMsg3>')[1].split('</arvlMsg3>')[0]
            let temp = str[i].split('<trainLineNm>')[1].split('</trainLineNm>')[0]
            let boost = ''
            try {
              boost = str[i].split('<btrainSttus>')[1].split('</btrainSttus>')[0]
              boost = ' [급행] '
            } catch (exception) {
              boost = ''
            }

            trainLineNm = temp.split('-')[0];

            if (arvlMsg2.startsWith('전역') || arvlMsg2.startsWith('화전')) {
              stateMsg = trainLineNm +boost+'| ' + arvlMsg2
              offset = 1;
            }
            else {
              stateMsg = trainLineNm +boost+ '| ' + arvlMsg3 + ' 위치';
              offset = arvlMsg2.split('[')[1].split(']')[0]
            }

            if (str[i].split('<updnLine>')[1].split('</updnLine>')[0] == '상행' ){
              toPajuArr.push({state : stateMsg, offset : offset})
            } else {
              toSeoulArr.push({state: stateMsg,offset :offset})
            }
          } catch( exception) {
            console.log(exception);
            res.send('Data Parsing Error! - Code:01');
          }
        }

        let result = '[ [ '
        for (let i = 0; i < toPajuArr.length; i++){
          result += '{ \"state\" : \"' + toPajuArr[i].state + '\", '
          result += ' \"offset\" : \"'+ toPajuArr[i].offset + '\"}'
          if ( i != toPajuArr.length-1) result += ', '
        }
        result +='], [ '
        for (let i = 0; i < toSeoulArr.length; i++){
          result += '{ \"state\" : \"' + toSeoulArr[i].state + '\", '
          result += ' \"offset\" : \"'+ toSeoulArr[i].offset + '\"}'
          if ( i != toSeoulArr.length-1) result += ', '
        }
        result +='] ]'
        res.send(result);
      }

    })
  });
}
