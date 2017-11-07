const gulp = require('gulp');
const svgmin = require('gulp-svgmin');
const svgstore = require('gulp-svgstore');
const rename = require('gulp-rename');

gulp.task('symbols', ()=> {
    return gulp.src('./src/dist/img/icons/*.svg')
    .pipe(svgmin())
    .pipe(gulp.dest('build/img'));
})