const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const webp = require('imagemin-webp');
const extReplace = require('gulp-ext-replace');
const purify = require('gulp-purifycss');
var gzip = require('gulp-gzip');

gulp.task('compress', async function () {
  gzip({ append: true });
  gulp.src('./dist/*.js').pipe(gzip()).pipe(gulp.dest('./dist/'));
});
gulp.task('purifyCSS', () => {
  return gulp
    .src('./dist/*.css')
    .pipe(
      purify(['./src/**/*.ts', './src/**/*.html'], {
        info: true, // Outputs reduction information (like in the screenshot above)
        minify: true, // Minifies the files after reduction
        rejected: false, // Logs the CSS rules that were removed
        // whitelist: ['*transition*', '*dimmer*'] // Ignored css classes
      })
    )
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', function () {
  // console.log('Hello Gulp!');
});
gulp.task('exportWebP', function () {
  let src = 'src/assets/images/home/*'; // Where your PNGs are coming from.
  let dest = './src/assets/images/home'; // Where your WebPs are going.
  // console.log('WebP Conversion..');
  return gulp
    .src(src)
    .pipe(
      imagemin([
        webp({
          quality: 55,
        }),
      ])
    )
    .pipe(extReplace('.webp'))
    .pipe(gulp.dest(dest));
});
