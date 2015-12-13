# automagic
A SystemJS hot module replacer to loads file changes <a target='_blank' href='http://i.imgur.com/2eKyLKf.gifv'>without full page refreshes.</a>

#Usage
####Server

`npm install --save-dev automagic-systemjs-server`

```
var automagic = require('automagic-systemjs-server');
automagic.init(options);
```
#####init(options)
######port
socket.io server port. defaults to `3000`
######origins 
socket.io CORS. defaults to any `'*:*'`
######newConnectionCallback
function invoked on a new connection. defaults to `console.log('...', new Date());`

```
gulp.watch(['*.js', '!node_modules/**'])
        .on('change', function (e) {
            var data = {
                fileName: path.basename(e.path)
            };
            io.emit('fileChanged', data);
        });
```

To retrieve the`io` instance you can store it on initialisation `var io = automagic.init()` or use the public getter `automagic.io`



####Client
`jspm install npm:automagic-systemjs-client`

`System.trace = true;`

```
import automagic from 'automagic-systemjs-client';
automagic.baseUri = 'Scripts/';
automagic.port = 3912;
automagic.init();
```



