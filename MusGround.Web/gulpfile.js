var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('moveToLibs', function (done) {
    gulp.src([
      'node_modules/angular2/bundles/js',
      'node_modules/angular2/bundles/angular2.*.js*',
      'node_modules/angular2/bundles/angular2-polyfills.js',
      'node_modules/angular2/bundles/http.*.js*',
      'node_modules/angular2/bundles/router.*.js*',
      'node_modules/es5-shim/es5-shim.min.js*',
      'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
      'node_modules/systemjs/dist/*.*',
      'node_modules/jquery/dist/jquery.*js',
      'node_modules/bootstrap/dist/js/bootstrap*.js',
      'node_modules/rxjs/bundles/Rx.js',
      'node_modules/angular2/bundles/http.dev.js',
      'node_modules/angular2/bundles/router.dev.js',
      'node_modules/es6-promise/dist/es6-promise.min.js'
    ]).pipe(gulp.dest('./wwwroot/libs/'));

    gulp.src([
      'node_modules/bootstrap/dist/css/bootstrap.css'
    ]).pipe(gulp.dest('./wwwroot/libs/css'));
});

gulp.task('compileTypeScript', function (done) {
    return gulp.src('app/**/*.ts')
	    .pipe(ts({
	        experimentalDecorators : true,
		    noImplicitAny: true,
		    out: 'output.js'
	    }))
	    .pipe(gulp.dest('./wwwroot/js'));
});

var tsProject = ts.createProject({
    target: "es5",
    module: "system",
    moduleResolution: "node",
    sourceMap: true,
    emitDecoratorMetadata: true,
    experimentalDecorators: true,
    removeComments: false,
    noImplicitAny: false
});


gulp.task('scripts', function () {
    var tsResult = gulp.src('app/**/*.ts')
        .pipe(sourcemaps.init())
		.pipe(ts(tsProject));
    tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./wwwroot/app'));
    gulp.src('app/**/*.ts')			
    .pipe(gulp.dest('./wwwroot/app'));
});
gulp.task('watch', ['scripts'], function () {
    gulp.watch('app/**/*.ts', ['scripts']);
});

gulp.task('staticContent', function () {
    gulp.src('app/content/**')
	.pipe(gulp.dest('./wwwroot/app/content/'));
    gulp.src('app/templates/**')
	.pipe(gulp.dest('./wwwroot/app/templates/'));
    gulp.src('app/index.html')
   .pipe(gulp.dest('./wwwroot/'));
});