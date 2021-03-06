A SystemJS hot module replacer to loads file changes <a target='_blank' href='http://i.imgur.com/2eKyLKf.gifv'>without full page refreshes.</a>

Note: this was an exploratory piece and I do not recommend using it. If this project interests you, check out a proper [build system](https://webpack.js.org/concepts/hot-module-replacement/) that is community supported


# Usage [![Build Status](https://travis-ci.org/aTable/automagic-systemjs-server.svg)](https://travis-ci.org/aTable/automagic-systemjs-server)

## Install
`npm install --save-dev automagic-systemjs-server`

## Launch the server
```
var automagic = require('automagic-systemjs-server');
automagic.init(options);
```
### init(options)
#### port
socket.io server port to start on

defaults `3912`

#### origins 
socket.io CORS 

default `'*:*'`

#### newConnectionCallback
function invoked on a new connection

default `console.log('...', new Date());`

## Publish `automagic.fileChanged` event to clients
```
gulp.watch(['*.js', '!node_modules/**'])
        .on('change', function (e) {
            var data = {
                fileName: path.basename(e.path)
            };
            io.emit(automagic.fileChanged, data);
        });
```

To retrieve the`io` instance you can store it on initialisation `var io = automagic.init()` 
or use the public getter `automagic.io`


## Server setup complete!
Continue with the <a href='https://github.com/aTable/automagic-systemjs-client'>automagic client</a>
