
var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');


function handler(req, res) {
    var message = 'Up and running';
    res.end(message);
}

var socketGroupingKey = 'systemjs-dev-server';

exports.init = function (options) {
    var port = options.port || 3000;
    var newConnectionCallback = options.newConnectionCallback || function (socket) {
        console.log('new connection', new Date());
        //socket.join(socketGroupingKey);
    };

    io.on('connection', function (socket) {
        newConnectionCallback(socket);
    });

    app.listen(port);
    console.log('listening on port: ', port);

    return io;
}

exports.broadcast = function (eventType, data) {
    //io.sockets.forEach(function (socket) {
    //    socket.emit(eventType, data);
    //});
}


Object.defineProperty(exports, 'io', {
    get: function () {
        return io;
    }
});

