
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
    next();
};
var urlencodedParser = bodyParser.urlencoded({ extended: false })
let book = {
  name : 'javascript',
  number:1,
  id:2

}
app.use(allowCrossDomain);
app.get('/books/1', function (req, res) {
   res.send(book);
})
app.post('/books/1', bodyParser.json(),function (req,res) {
  Object.assign(book,req.body)
  res.send(book);
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)
}
)
