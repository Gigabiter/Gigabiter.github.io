'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('default', function () {
    gulp.watch('./css/custom/*.scss', ['scss']);
});
gulp.task('scss', function () {
    gulp.src('./css/style.scss')
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(gulp.dest('./css'));
});
