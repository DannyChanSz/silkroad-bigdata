var gulp = require('gulp');
var sass = require('gulp-sass');



gulp.task('default', function() {
    console.log('hello');
});

gulp.task('sass', function() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('lib', function() {

    gulp.src('bower_components/jquery/dist/jquery.js')
        .pipe(gulp.dest('lib/jquery/'));

    gulp.src('bower_components/highcharts/highcharts.js')
        .pipe(gulp.dest('lib/highcharts/'));

    gulp.src('bower_components/highcharts/modules/exporting.js')
        .pipe(gulp.dest('lib/highcharts/'));

    gulp.src('bower_components/highcharts/highcharts-3d.js')
        .pipe(gulp.dest('lib/highcharts/'));

    gulp.src('bower_components/requirejs/require.js')
        .pipe(gulp.dest('lib/requirejs/'));

    //bootstrap
    gulp.src('bower_components/bootstrap/dist/js/bootstrap.min.js')
        .pipe(gulp.dest('lib/bootstrap/js'));

    gulp.src('bower_components/bootstrap/dist/css/*.*')
        .pipe(gulp.dest('lib/bootstrap/css'));

    gulp.src('bower_components/bootstrap/dist/fonts/*.*')
        .pipe(gulp.dest('lib/bootstrap/fonts'));

    //font-awesome
    gulp.src('bower_components/font-awesome/css/*.*')
        .pipe(gulp.dest('lib/font-awesome/css'));


    gulp.src('bower_components/font-awesome/fonts/*.*')
        .pipe(gulp.dest('lib/font-awesome/fonts'));
});
