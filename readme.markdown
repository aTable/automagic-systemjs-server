# automagic
A SystemJS hot module replacer to loads file changes <a target='_blank' href='http://i.imgur.com/2eKyLKf.gifv'>without full page refreshes.</a>

#Usage
##Server

###Install
`npm install --save-dev automagic-systemjs-server`

###Launch the server
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

###Publish `fileChanged` event to clients
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



#Usage
##Client
###Install 
`jspm install npm:automagic-systemjs-client`

###Load systemjs + configuration
```
<head>
	<script src="jspm_packages/system.js" type="text/javascript"></script>
	<script src="systemjs-config.js"></script>
	<script>
		System.trace = true;
	</script> 
</head>
```

###Connect to the server
```
import automagic from 'automagic-systemjs-client';
automagic.baseUri = 'Scripts/';
automagic.port = 3912;
automagic.init();
```

###automagic
####baseUri
the base path that files are served from e.g. `http://myawesomeapp.com/{automagic.baseUri}/bootstrap.js` 

defaults `Scripts/`

####port
port to connect to. must match the server port 

defaults `3912`


