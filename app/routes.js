var router = express.Router();

module.exports = function(app){
  app.get('/', function(req,res)
  {
    res.sendFile('./public/index.html');
  });
};

app.use('api/v1/', router);
