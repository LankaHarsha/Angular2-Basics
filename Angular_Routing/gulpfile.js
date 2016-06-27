var gulp = require('gulp');
var typescript = require('gulp-typescript');//This is to convert typescript to javascript
var sourcemaps = require('gulp-sourcemaps');//This is to generate sourcemap files (Useful for debugging in typescript)
var tsProject = typescript.createProject('tsconfig.json');

var appDev = 'dev/';
var appProd = 'app/';
var libPath = 'lib/'

gulp.task('build-ts', function() {

    return gulp.src(appDev+'**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(appProd));
});

gulp.task('watch', function() {

    gulp.watch(appDev+'**/*.ts',['build-ts']);
});

gulp.task('cp-vendor-scripts', function() {

    return gulp.src([
        'node_modules/es6-shim/es6-shim.min.js',
        'node_modules/systemjs/dist/system-polyfills.js',
        'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
        'node_modules/angular2/bundles/angular2-polyfills.js',
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/rxjs/bundles/Rx.js',
        'node_modules/angular2/bundles/angular2.js',
        'node_modules/angular2/bundles/router.dev.js'
    ]).pipe(gulp.dest(libPath));
})

gulp.task('default', ['cp-vendor-scripts','watch', 'build-ts']);
