const gulp = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");

gulp.task("sass", function () {
  return gulp.src("sass/*.scss")
    .pipe(sass({outputStyle: "expanded"}))
    .pipe(postcss([
      autoprefixer({
        cascade: false
      })
    ]))
    .pipe(gulp.dest("css"));
});

gulp.task("watch", function () {
  gulp.watch("sass/*.scss", ["sass"]);
});

gulp.task("default", ["sass"]);
