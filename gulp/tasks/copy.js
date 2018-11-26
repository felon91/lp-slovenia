module.exports = function () {
  $.gulp.task('copy', function () {
    return $.gulp.src([
      'fonts/**/*.{woff,woff2}',
      'images/freeslovenia/**',
      '*.html'
    ], {
      base: '.'
    })
        .pipe($.gulp.dest('build'));

  });
};