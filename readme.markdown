# automagic
A SystemJS hot module replacer to loads file changes <a target='_blank' href='http://i.imgur.com/2eKyLKf.gifv'>without full page refreshes.</a>

###Instructions
####Server
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

####Client
`jspm install npm:automagic-systemjs-client`
`System.trace = true;`
```
import automagic from 'automagic-systemjs-client';
automagic.baseUri = 'Scripts/';
automagic.port = 3912;
automagic.init();
```



