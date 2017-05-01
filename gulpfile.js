/**
 * Created by ivill on 2017/3/28.
 */

const gulp = require('gulp');
const del = require('del');
const esprima =require('./esprima.js');

const concat = require('gulp-concat');

gulp.task('esprima', function() {
    return gulp.src('./input/*.js')
        .pipe(esprima())
        .pipe(gulp.dest('./output/'));
});


gulp.task('output', () => {
    del([
        'dist/*'
    ]);
});


// clear old files
gulp.task('clean', () => {
    del([
        'output/*'
    ]);
});

gulp.task('scripts', function() {
    return gulp.src('./input/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/'));
});


gulp.task('default', [
    'clean',
    'esprima',
    // 'scripts'
]);