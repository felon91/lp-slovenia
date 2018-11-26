module.exports = function () {
  $.gulp.task('webp', function () {
    return $.gulp.src('images/freeslovenia/**/*.{png,jpg}')
        .pipe($.gp.webp({quality: 90}))
        .pipe($.gulp.dest('build/images/freeslovenia'));
  });
};