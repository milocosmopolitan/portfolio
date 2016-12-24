'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./app/app.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./public'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch(['./app/components/**/*.scss', './app/app.scss'], ['sass']);
});