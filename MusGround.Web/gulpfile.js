var gulp = require('gulp');
var clean = require('gulp-clean');
var ts = require('gulp-typescript');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var tsOptions = ts.createProject({
    target: "es5",
    module: "system",
    moduleResolution: "node",
    sourceMap: true,
    emitDecoratorMetadata: true,
    experimentalDecorators: true,
    removeComments: false,
    noImplicitAny: false
});
gulp.task('clean', function () {
    return gulp.src([
            './wwwroot/app',
            './wwwroot/libs',
            './wwwroot/index.html'
        ])
        .pipe(clean());
});
gulp.task('copyLibs', function (done) {
    gulp.src([
      'node_modules/angular2/bundles/angular2.*.js*',
      'node_modules/angular2/bundles/angular2-polyfills.js',
      'node_modules/angular2/bundles/http.*.js*',
      'node_modules/angular2/bundles/router.*.js*',
      'node_modules/es5-shim/es5-shim.min.js*',
      'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
      'node_modules/systemjs/dist/*.*',
      'node_modules/bootstrap/dist/js/bootstrap*.js',
      'node_modules/rxjs/bundles/Rx.js',
      'node_modules/angular2/bundles/http.dev.js',
      'node_modules/angular2/bundles/router.dev.js'
    ]).pipe(gulp.dest('./wwwroot/libs/js'));

    gulp.src([
      'node_modules/bootstrap/dist/css/bootstrap.css'
    ]).pipe(gulp.dest('./wwwroot/libs/css'));
});
gulp.task('processTypeScript', function () {
    tsResult = gulp.src('app/**/*.ts')
        .pipe(sourcemaps.init())
		.pipe(ts(tsOptions)).js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./wwwroot/app'));
    gulp.src('app/**/*.ts')			
        .pipe(gulp.dest('./wwwroot/app'));
});
gulp.task('processLess', function () {
    gulp.src('app/content/less/**/*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./wwwroot/app/content/less'));
});
gulp.task('copyStaticContent', function () {
    gulp.src('app/content/images/**')
	    .pipe(gulp.dest('./wwwroot/app/content/images'));
    gulp.src('app/templates/**')
	    .pipe(gulp.dest('./wwwroot/app/templates/'));
    gulp.src('app/index.html')
    .pipe(gulp.dest('./wwwroot/'));
});
gulp.task('build', ['copyLibs', 'processTypeScript', 'processLess', 'copyStaticContent']);
gulp.task('rebuild', ['clean'], function () {
    gulp.start('build');
});

gulp.task('watch', ['processTypeScript', 'processLess'], function () {
    gulp.watch('app/**/*.ts', ['processTypeScript']);
    gulp.watch('app/content/less/**/*.less', ['processLess']);
});