var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var formidable = require('formidable');
var util = require('util');
var fs = require('fs');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// server start
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

app.get('/', function (req, res) {
  res.render('index.html.ejs');
});

app.get('/upload', function(req, res, next) {
  res.render('upload.html.ejs');
});

app.get('/vote', function(req, res, next) {
  res.render('vote.html.ejs');
});

function rename_err( err ){
	console.log(err);
}

app.post('/upload_data', function (req, res, next) {

    var form = new formidable.IncomingForm();
	form.uploadDir = "public/uploads";

    form.parse(req, function(err, fields, files) {

		var file_path = form.uploadDir + '/registerform/' + files.candidate_registerform.name;

		var department = fields.department;
		var student_id = fields.student_id;
		var name = fields.name;
		var phone = fields.phone;
		var ext_number = fields.ext_number;
		var email = fields.email;

      	fs.rename(files.candidate_registerform.path, file_path, rename_err);

    });


});
