
var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');


function handler(req, res) {
    var message = 'Up and running';
    res.end(message);
}

exports.init = function (options) {
    if (typeof options === 'undefined') {
        options = {};
    }
    
    var port = options.port || 3912;
    var origins = options.origins || '*:*';
    var newConnectionCallback = options.newConnectionCallback || function (socket) {
        console.log('new connection', new Date());
    };
    
    io.set('origins', origins);
    io.on('connection', function (socket) {
        newConnectionCallback(socket);
    });

    app.listen(port);
    console.log('listening on port: ', port);

    return io;
}

Object.defineProperty(exports, 'io', {
    get: function () {
        return io;
    }
});

exports.fileChanged = 'fileChanged';
