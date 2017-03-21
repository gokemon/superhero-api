const gulp = require('gulp');
const ts   = require('gulp-typescript');
const JSON_FILES = ['src\*.json', 'src\**\*.json'];

/* use the ts config file */
const tsProject = ts.createProject('tsconfig.json');


/* gulp task scripts setup */
gulp.task('scripts', () => {
    const tsResult = tsProject.src()
        .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('dist'));
});


/* gulp task watch scripts */
gulp.task('watch', ['scripts'], () => {
  gulp.watch('src/**/*.ts', ['scripts']);
});


/* gulp task set assets dist */
gulp.task('assets', function() {
  return gulp.src(JSON_FILES)
  .pipe(gulp.dest('dist'));
});


/* gulp task MAIN default*/
gulp.task('default', ['watch', 'assets']);