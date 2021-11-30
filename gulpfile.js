const gulp = require('gulp')
const autoprefixer = require(gulp - autoprefixer)

gulp.task('styles', () => {
  gulp.src('css/main.css').pipe(autoprefixer).pipe(gulp.dest('build'))
})

gulp.task('watch', () => {
  gulp.watch('css/main.css', ['styles'])
})
