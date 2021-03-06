var gulp = require('gulp');
var concat = require('gulp-concat');

var browserSync = require('browser-sync').create();
var profile = process.env.PROFILE || 'local';

var appProfilePath = './profile/' + profile ;

var vendorJS = [
  'bower_components/jquery/dist/jquery.min.js',
  'bower_components/angular/angular.min.js',
  'bower_components/angular-ui-router/release/angular-ui-router.min.js',
  'bower_components/bootstrap/dist/js/bootstrap.min.js'
];

var vendorCSS = [
  'bower_components/bootstrap/dist/css/bootstrap.min.css'
];

gulp.task('vendorJS', function () {
  return gulp.src(vendorJS)
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest('./public/js'))
});


gulp.task('vendorCSS', function () {
  return gulp.src(vendorCSS)
    .pipe(concat('vendor.min.css'))
    .pipe(gulp.dest('./public/css'))
});

gulp.task('bootstrapFonts', function () {
  return gulp.src(['vendor/bootstrap/dist/fonts/**/*.*'])
    .pipe(gulp.dest('./public/fonts'))
});

gulp.task('copyProfile', function () {
  return gulp.src(appProfilePath + '/**/*.*')
    .pipe(gulp.dest('./app'));
});

gulp.task('copy', ['copyProfile'], function () {
  return gulp.src(['./app/**/*.*', './index.html'])
    .pipe(gulp.dest('./public'));

});

gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: './public'
    },
    browser: 'Chrome'
  });
});

gulp.task('vendor', ['vendorJS', 'vendorCSS', 'bootstrapFonts']);

gulp.task('build', ['vendor', 'copy']);


gulp.task('default', ['browser-sync'], function () {
  gulp.watch('./app/**/*.*', ['build']);
  gulp.watch('./public/**/*.*').on('change', browserSync.reload);
});