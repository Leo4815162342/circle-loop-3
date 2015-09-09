var gulp = require('gulp'),
	sass = require('gulp-sass'),
  csscomb = require('gulp-csscomb'),
	autoprefixer = require('gulp-autoprefixer');
 
gulp.task('css', function () {
  gulp.src('./scss/main.scss')
    .pipe(sass({includePaths: ['./scss']}))
  	.pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer({
            browsers: [
              'last 2 versions',
              'safari 5',
              'ie 8',
              'ie 9',
              'opera 12.1',
              'ios 6',
              'android 4'
            ],
            cascade: false
        }))
    .pipe(csscomb())
    .pipe(gulp.dest('css/'));
});

gulp.task('default', function () {
  gulp.watch('./scss/**/*.scss', ['css']);
});