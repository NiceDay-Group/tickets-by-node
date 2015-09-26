var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var mocha = require('gulp-mocha');

gulp.task('nodemon', () => {
  nodemon({
    script: 'index.js',
    ext: 'js',
    ignore: ['*.test.js']
  });
});

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