var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var templateData = require('./data/newsletter.json');

gulp.task('make', function () {
    return gulp.src('src/body.handlebars')
        .pipe(handlebars(templateData))
        .pipe(rename('newsletter.html'))
        .pipe(gulp.dest('dist'));
});