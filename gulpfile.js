var gulp         = require('gulp');
var stylus       = require('gulp-stylus');
var browserSync  = require('browser-sync');
var del 		 = require('del');  
var autoprefixer = require('gulp-autoprefixer');
var pug 		 = require('gulp-pug');
var plumber 	 = require('gulp-plumber');
var sourcemaps   = require('gulp-sourcemaps');

gulp.task('styl', function () {
	return gulp.src('app/styl/**/*.styl')
		.pipe(sourcemaps.init())
		.pipe(stylus())
		.pipe(sourcemaps.write())
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true}))
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('html', function() {
	return gulp.src('app/pug/pages/*.pug')
		.pipe(plumber())
		.pipe(pug({pretty: true}))
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'dist'
		},
		notify: false
	});
});

gulp.task('clean', function() {
	return del.sync('dist');
});

gulp.task('watch', ['browser-sync', 'html', 'styl'], function() {
	gulp.watch('app/pug/pages/*.pug', ['html']);
	gulp.watch('app/styl/**/*.styl', ['styl']);
	gulp.watch('dist/*.html', browserSync.reload);
	gulp.watch('dist/js/**/*.js', browserSync.reload);
});

gulp.task('build', ['clean', 'img', 'styl', ], function() {

	var buildCss = gulp.src('app/css/main.css')
		.pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));

	var buildJs = gulp.src('app/js/**/*')
		.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('app/*.html')
		.pipe(gulp.dest('dist'));
});

