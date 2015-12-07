# automagic
A SystemJS hot module replacer to loads file changes without full page refreshes.


`npm install --save-dev systemjs-automagic-server`

`var automagic = require('systemjs-automagic-server');`

`automagic.init(options);`


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
