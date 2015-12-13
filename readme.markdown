# automagic
A SystemJS hot module replacer to loads file changes <a target='_blank' href='http://i.imgur.com/2eKyLKf.gifv'>without full page refreshes.</a>

#Usage
##Server

###1. Install
`npm install --save-dev automagic-systemjs-server`

###2. Launch the server
```
var automagic = require('automagic-systemjs-server');
automagic.init(options);
```
###init(options)
####port
socket.io server port to start on

defaults `3912`

####origins 
socket.io CORS 

default `'*:*'`

####newConnectionCallback
function invoked on a new connection

default `console.log('...', new Date());`

###3. Publish `fileChanged` event to clients
```
gulp.watch(['*.js', '!node_modules/**'])
        .on('change', function (e) {
            var data = {
                fileName: path.basename(e.path)
            };
            io.emit('fileChanged', data);
        });
```

To retrieve the`io` instance you can store it on initialisation `var io = automagic.init()` 
or use the public getter `automagic.io`


###4. Continue with the <a href='https://github.com/aTable/automagic-systemjs-client'>automagic client</a>
