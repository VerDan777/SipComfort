const gulp = require('gulp');
const run = require('run-sequence');

gulp.task('build', (fn)=> {
    run(
        'clean',
        'copy',
        'styles',
        'scripts',
        'images',
        'symbols',
        fn 
    );
})