module.exports = function (app) {

  app.set('view engine','ejs');
  app.post( '/loginProcess',(req,res) => {
    res.render(__dirname+'/loginProcess.ejs',{id:req.body.id});
  });

  app.set('view engine','ejs');
  app.get('/mainPage', (req,res) => {
    res.render(__dirname+'/mainPage.ejs');
  });

  app.get('/get_enterance/:id', function (req, res) {
    //GET 메소드 / 주소의 요청일때만 실행된다.
    enterance.get_enterance(req, res);
  });
}
