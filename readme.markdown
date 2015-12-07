# automagic
A SystemJS hot module replacer to loads file changes without full page refreshes.


`npm install --save-dev automagic-systemjs-server`

```
var automagic = require('automagic-systemjs-server');
automagic.init(options);
```


```
gulp.watch(['*.js', '!node_modules/**'])
        .on('change', function (e) {
            var data = {
                fileName: path.basename(e.path)
            };
            io.emit('fileChanged', data);
        });
```

<a target='_blank' href='http://i.imgur.com/2eKyLKf.gifv'>See it in action </a>


//TODO: Add recursive dependency replacement


Work in progress
