var fs = require('fs');
var express = require('express');
var app = express();


app.use(express.static('./'));
var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});