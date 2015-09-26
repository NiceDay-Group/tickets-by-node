var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('test', () => {
  process.env.NODE_ENV = 'test';
  process.env.PORT = 3001;
  return gulp.src(['./test/**/*.test.js'])
    .pipe(mocha({
        require: ['./test/bootstrap/chai.js']
      }))
});

gulp.task('default', () => {
  console.log('Gulp is running');
});