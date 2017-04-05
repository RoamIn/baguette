/**
 * Created by ivill on 2017/3/28.
 */

let gulp = require('gulp');
let del = require('del');

let concat = require('gulp-concat');
let jsdoc = require('gulp-jsdoc3');

gulp.task('test', function () {
    return gulp.src('./src/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('doc', function (cb) {
    return gulp.src(['./src/*.js'], {read: false})
        .pipe(jsdoc(cb));
});

gulp.task('output', () => {
    del([
        'dist/*'
    ]);
});

gulp.task('default', [
    'del'
]);




// clear old files
gulp.task('clean', () => {
    del([
        'output/*'
    ]);
});