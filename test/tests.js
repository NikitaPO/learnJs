'use strict';

require('mocha');
const assert = require('chai').assert;
const sinon = require('sinon');
const app = require('../app/index');

describe('pow', function() {

  describe('Erects x in 3 degree', () => {

    function makeTest(x) {
      let expected = x * x * x;
      it(`Erects ${x} in 3 degree = ${expected}`, function() {
        assert.equal( app.pow(x, 3), expected, 'Doesn\'t erects in 3 degree');
      });
    }

    for (let i = 0; i <= 10; i++) {
      makeTest(i);
    }

  });

  describe('Degree check', () => {


    it('for negative values of degree pow returns NaN', function() {
      assert.isNaN( app.pow(2, -1), 'pow(2, -1) not a NaN' );
    });

    it('for float values of degree pow returns NaN', function() {
      assert.isNaN( app.pow(2, 1.5), 'pow(2, 1.5) not a NaN' );
    });

    it('When erects 0 in 0 degree returns NaN', function() {
      assert.isNaN( app.pow(0, 0), 'pow(0, 0) not a NaN' );
    });

  });
});

const autoprefixer = require('gulp-autoprefixer'),
  babel = require('gulp-babel'),
  browserSync = require('browser-sync'),
  cleanCSS = require('gulp-clean-css'),
  del = require('del'),
  concat = require('gulp-concat'),
  gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  rename = require('gulp-rename'),
  scss = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  uglify = require('gulp-uglify');

gulp.task('watch', function () {
  gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'));
  gulp.watch('app/**/*.html', gulp.parallel('html'));
  gulp.watch('app/js/index.js', gulp.parallel('js'))
});

gulp.task('default', gulp.parallel('css-libs', 'scss', 'js', 'html', 'browser-sync', 'watch'));


