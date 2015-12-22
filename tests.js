
var assert = require('assert');
var automagic = require('./index');

describe('automagic-systemjs-server', function() {
    
    describe('exports', function() {
       it('should export events', function() {
           assert.equal(automagic.fileChanged, 'fileChanged');
       }); 
       
       it('should export props', function() {
          assert.equal(automagic.io, automagic.init()); 
       });
    });  
    
});
