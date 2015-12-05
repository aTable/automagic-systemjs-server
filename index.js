
var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');


function handler(req, res) {
    var message = 'Up and running';
    res.end(message);
}


exports.init = function (options) {
    var port = options.port || 3000;
    var callback = options.callback || function () { };
    io.on('connection', function (socket) {
        console.log('new connection');
    });

    app.listen(port);
    console.log('listening on port: ', port);
    callback(io);
}

