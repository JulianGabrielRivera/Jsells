const { src, dest, watch, series } = require('gulp'); // these are imports from the gulp package

const sass = require('gulp-sass')(require('sass')); // importing gulp sass plugin  and then after gulp sass it returns a function to get that sass compiler

function buildStyles() {
  // take in a source sass file then compile it into a css file then pipe it to a destination folder. this function compiles our css into scss
  return src('jsellsthem/**/*.scss').pipe(sass()).pipe(dest('css'));
} // the double * means it will any sub folder

function watchTask() {
  // if we use a * inside our watch and src instead of writing the single file itself, this means it will watch multiple scss files at the same time
  watch(['jsellsthem/**/*.scss'], buildStyles);
} // watcher function that watches our  source sass file, and then when we make changes to that file and save them it will automatically run buildstyles

exports.default = series(buildStyles, watchTask);
