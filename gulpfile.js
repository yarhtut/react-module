/**
 * Created by yhtut on 13/11/15.
 */
var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    packageJSON = require('./package.json'),
    semver = require('semver');

var nodeVersionIsValid = semver.satisfies(process.versions.node, packageJSON.engines.node);


//check everyone in the team has same version
if (!nodeVersionIsValid) {
    console.error('Invalid Node.js version. You need to be using ' + packageJSON.engines.node);
   // process.exit();
}

gulp.task('js:watch', function () {
    gulp.watch('./src', ['js']);
});


gulp.task('js', function () {
    //put all in one file cause browser can't require
    browserify({
        entries: packageJSON.main,
        extensions: ['.js'],
        debug: true
    })
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['js']);
gulp.task('watch', ['js:watch', 'js']);