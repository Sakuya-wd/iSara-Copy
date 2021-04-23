const gulp = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const htmlmin = require("gulp-htmlmin");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify")
const rename = require("gulp-rename");

const sassCompile = () => {
  return gulp.src("sass/*.scss",{
    sourcemaps: true
  })

    //scssをcssに変換する。
    .pipe(sass({
      outputStyle: "expanded"
    }))

    //ベンダープレフィックスの付与削除をする。
    .pipe(postcss([
      autoprefixer({
        cascade: false
      })
    ]))
    
    //cssを圧縮する。
    .pipe(cleanCSS())

    //圧縮ファイルの拡張子を.min.cssに変換する。
    .pipe(rename({
      extname: ".min.css"
    }))
    
    //cssディレクトリに出力する。
    .pipe(gulp.dest("css",{
      sourcemaps: "./" 
    }));
}

const htmlCompressor = () =>{
  return gulp.src("./index.html",{
       sourcemaps: true
  })

    //htmlを圧縮する。
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
   
    //圧縮ファイルの拡張子を.min.htmlに変換する。
    .pipe(rename({
      extname: ".min.html"
    }))

    //index.htmlと同じディレクトリに出力する。 
    .pipe(gulp.dest("./",{
      sourcemaps: "./"
    }));
}

const javascriptCompressor = () =>{
  return gulp.src("script/jQuery.js",{
       sourcemaps: true
  })

    //javaScriptを圧縮する。
    .pipe(uglify())
   
    //圧縮ファイルの拡張子を.min.jsに変換する。
    .pipe(rename({
      extname: ".min.js"
    }))
 
    //jQuery.jsと同じディレクトリに出力する。 
    .pipe(gulp.dest("script",{
      sourcemaps: "./"
    }));
}

const watch = (done) => {
  //scssに変更がある時、自動でsassCompile関数の処理をする。
  gulp.watch("sass/*.scss", sassCompile);
  gulp.watch("index.html", htmlCompressor);
  gulp.watch("script/jQuery.js", javascriptCompressor); 
  done();
}

exports.sass = sassCompile;
exports.html = htmlCompressor;
exports.js = javascriptCompressor;
exports.default = watch;
