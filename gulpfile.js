var gulp = require('gulp');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var del = require('del');
var path = require('path');

var src = 'src/angular-enum.js'; 

gulp.task('dist', function () {
  return gulp.src(src)
    .pipe(ngAnnotate())
    .pipe(gulp.dest('dist/'))    
    .pipe(rename({ extname: '.min.js' }))
    .pipe(sourcemaps.init())
      .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('clean', function () {
  return del.sync('dist/');
});

gulp.task('build', ['clean', 'dist']);