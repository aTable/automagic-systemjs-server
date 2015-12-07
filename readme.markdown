# systemjs-hot-loader
Loads file changes without full page refreshes


`npm install --save-dev systemjs-hot-loader`

`var systemJsHotLoader = require('systemjs-hot-loader');`

`systemJsHotLoader.init(options);`


```
gulp.watch(['*.js', '!node_modules/**'])
        .on('change', function (e) {
            var data = {
                fileName: path.basename(e.path)
            };
            io.emit('fileChanged', data);
        });
```


Work in progress
