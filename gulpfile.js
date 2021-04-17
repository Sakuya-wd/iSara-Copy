const gulp = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

const sassCompile = () => {
  return gulp.src("sass/*.scss")
    //scssをcssに変換を行う。
    .pipe(sass({
      outputStyle: "expanded"
    }))

    //ベンダープレフィックスの付与削除を行う。
    //デフォルト設定のため、シェア率1%以上のブラウザ,
    //最新の2バージョンのブラウザ, Firefox ESR版に対応する。
    .pipe(postcss([
      autoprefixer({
        cascade: false
      })
    ]))
    
    //cssの圧縮を行う。
    .pipe(cleanCSS())

    //圧縮ファイルの拡張子を.min.cssに変換を行う。
    .pipe(rename({
      extname: ".min.css"
    }))

    .pipe(gulp.dest("css"));
}

const watch = (done) => {
  //scssに変更がある時、自動でsassCompile関数の処理を行う。
  gulp.watch("sass/*.scss", gulp.task("sassCompile"));
  done();
}

exports.default = sassCompile;
exports.watch = watch;
