

import automagic from 'automagic-systemjs-client';
automagic.baseUri = 'Scripts/';
automagic.port = 3912;
automagic.init();

var content = document.querySelector('#content');
content.innerHTML += 'file changed! ' + new Date() + '<br/>';

 
//make some visible changes, save the file and prepare for automagic!