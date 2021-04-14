const gulp = require("gulp");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");

gulp.task("default", function () {
  return gulp.src("CSS/*.css")
    .pipe(postcss([
      autoprefixer({
        cascade: false
      })
    ]))
    .pipe(gulp.dest("dist"));
});
