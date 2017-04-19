/**
 * Created by ivill on 2017/3/28.
 */

const gulp = require('gulp');
const del = require('del');
const test =require('./test.js');

gulp.task('test', function() {
    return gulp.src('./input/*.js')
        .pipe(test())
        .pipe(gulp.dest('./dist/'));
});


gulp.task('output', () => {
    del([
        'dist/*'
    ]);
});

gulp.task('default', [
    'test'
]);



// clear old files
gulp.task('clean', () => {
    del([
        'output/*'
    ]);
});