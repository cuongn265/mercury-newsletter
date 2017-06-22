var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
 
gulp.task('make', function () {
    var templateData = {
        firstName: 'Eugene'
    },
    options = {
        batch : ['./src/partials'],
        helpers : {
            capitals : function(str){
                return str.toUpperCase();
            }
        }
    }
 
    return gulp.src('src/body.handlebars')
        .pipe(handlebars(templateData, options))
        .pipe(rename('newsletter.html'))
        .pipe(gulp.dest('dist'));
});