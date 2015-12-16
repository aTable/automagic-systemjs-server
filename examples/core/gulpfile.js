
var automagic = require('automagic-systemjs-server');
var gulp = require('gulp');
var path = require('path');

gulp.task('automagic', function () {
    automagic.init({
        port: 3912,
    });
});

gulp.task('watch', ['automagic'], function () {
    var io = automagic.io;

    var sources = ['**/*.js', '!jspm_packages/**', '!node_modules/**'];
console.log(automagic.fileChanged);
    gulp.watch(sources)
        .on('change', function (e) {
            var data = {
                fileName: path.basename(e.path),
            };
            io.emit(automagic.fileChanged, data);

        });


});