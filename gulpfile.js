const gulp = require('gulp'),
browserSync = require('browser-sync');

gulp.task('html', function() {
  return gulp.src('app/**/*.html')
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('js', function() {
  return gulp.src('app/**/*.js')
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "app/"
    }
  });
});

gulp.task('watch', function() {
  gulp.watch('app/scss/**/*.scss');
  gulp.watch('app/**/*.html', gulp.parallel('html'));
  gulp.watch('app/js/index.js', gulp.parallel('js'))
});

gulp.task('default', gulp.parallel('js', 'html', 'browser-sync', 'watch'));
