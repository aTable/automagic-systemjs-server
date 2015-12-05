# systemjs-hot-loader
Loads file changes without full page refreshes

Add the server
`npm install --save-dev systemjs-hot-loader`

`var systemJsHotLoader = require('systemjs-hot-loader');`

When a file changes, publish an event to the socket
`gulp.task('hot-loader', function () {
    var postInit = function (io) {
        gulp.watch(['Scripts/dans-video-pracs.es6.js', 'Scripts/test.es6.js']).on('change', function (e) {

            var data = {
                e: e,
                fileName: path.basename(e.path),
                content: fs.readFileSync(e.path, { encoding: 'utf8' })
            };
            io.emit('fileChanged', data);
        });
    };

    systemJsHotLoader.init({
        port: 3912,
        callback: postInit
    });

});`

Get the client side listener
`jspm install npm:`

