'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');
var	uglify = require('gulp-uglify');
var connect = require('gulp-connect');

var jsPath = [
	'bower_components/jquery/dist/jquery.js',
	'bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
	'bower_components/owl.carousel/dist/owl.carousel.js',
	'bower_components/sticky-kit/jquery.sticky-kit.min.js',
	'bower_components/masonry/dist/masonry.pkgd.min.js',
	'dist/js/offcanvas.js',
	'dist/js/main.js'
];

gulp.task('js-bundle-deps', function(){
	return gulp.src(jsPath)
		.pipe(concat('js-bundle.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

// server connect
gulp.task('connect', function() {
	connect.server({
		port: 8080,
		livereload: true
	});
});

gulp.task('sass', function () {
	gulp.src('app/scss/style.scss')
		.pipe(sass())
		.pipe(autoprefixer('last 2 version', 'ie 8', 'ie 9', 'ios 6', 'android 4'))
		.pipe(gulp.dest('dist'))
		.pipe(connect.reload());
});

gulp.task('html', function () {
	return gulp.src('*.html')
		.pipe(connect.reload());
})

gulp.task('watch', function () {
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('*.html', ['html']);
});

gulp.task('default', ['connect' ,'watch', 'html', 'sass']);
