var gulp = require('gulp');
var sass = require('gulp-sass');

var input = './assets/sass/*.scss';
var output = './wp-content/themes/custom';

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

gulp.task('sass', function () {
  return gulp
    // Find all `.scss` files from the `input` folder
    .src(input)
    // Run Sass on those files
    .pipe(sass(sassOptions).on('error', sass.logError))
    // Write the resulting CSS in the output folder
    .pipe(gulp.dest(output));
});
