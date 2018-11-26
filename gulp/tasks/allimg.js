module.exports = function () {
  $.gulp.task('allimg', function () {
    return $.gulp.src('images/freeslovenia/**/*.{png,jpg,svg}')
        .pipe($.gulp.dest('build/images/freeslovenia'));
  });
};