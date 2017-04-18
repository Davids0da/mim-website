var express = require('express');
var app = express();
var path = require('path');
var index = require('./routes/index');
var bodyParser = require("body-parser");
var nodemailer = require('nodemailer');

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

app.get('/indexeng', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/indexeng.html'));
});

app.get('/index', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.post('/contacteng', function (req, res) {
  var mailOpts, smtpTrans;

  smtpTrans = nodemailer.createTransport({
    service: 'Gmail', 
        auth: {
          user: 'sodakolor@gmail.com',
          pass: 'davidsodadavidsoda12345'
        }
  });
    mailOpts = {
    to: 'sodakolor@gmail.com',
    subject: 'MiM Website Customers',
    text: `${req.body.name}\n\n <${req.body.email}>\n\n${req.body.text}`
  };
  smtpTrans.sendMail(mailOpts);

res.sendFile(path.join(__dirname + '/views/contacteng.html'));
});



app.post('/contact', function (req, res) {
  var mailOpts, smtpTrans;

  smtpTrans = nodemailer.createTransport({
    service: 'Gmail', 
        auth: {
          user: 'sodakolor@gmail.com',
          pass: 'davidsodadavidsoda12345'
        }
  });
    mailOpts = {
    to: 'sodakolor@gmail.com',
    subject: 'MiM Website Customers',
    text: `${req.body.name}\n\n <${req.body.email}>\n\n${req.body.text}`
  };
  smtpTrans.sendMail(mailOpts);

res.sendFile(path.join(__dirname + '/views/contact.html'));
});

var port = process.env.PORT || 5000
app.listen(port, function () {
  console.log('Listening on port ' + port + '!')
});


