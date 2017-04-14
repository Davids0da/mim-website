var express = require('express');
var app = express();
var path = require('path');
var index = require('./routes/index');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/fonts/', express.static(path.join(__dirname, '/node_modules/bootstrap/fonts')));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

var port = process.env.PORT || 5000
app.listen(port, function () {
  console.log('Listening on port ' + port + '!')
});


