var     gulp = require('gulp'),
        sass = require('gulp-sass'),
        minify_css = require('gulp-minify-css'),
        jsmin = require('gulp-jsmin'),
        rename = require('gulp-rename'),
        gulpSequence = require('gulp-sequence');


const   src_sass = './sass/**/*.scss',
        src_css  = './css/**/*css',
        src_js  = 'eva-chat.js';

    gulp.task('gulp-test', function() {
        console.log('Teste');
    });

    //=================== SASS COMPILE ===================
    gulp.task('sass-compile', function() {
        gulp.src(src_sass)
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('./css'));
    });

    //=================== SASS WATCH ===================
    gulp.task('sass-watch', function() {
        console.log('Sass Watch')
        gulp.watch(src_sass, ['sass-compile']);
    });

    //=================== JS COMPILE ===================
    // gulp.task('js-compile', function() {
    //     console.log('JS Compile');
    //     gulp.src(src_js)
    //       .pipe(gulp.dest('./js'));
    //   });      
  
    //=================== JS WATCH ===================
    gulp.task('js-watch', function() {
        console.log('JS Watch');
        return gulp.watch(src_js, ['js-minify'])
    });
    
    //=================== JS MINIFY ===================
    gulp.task('js-minify', function() {
        console.log('JS Minify');
        gulp.src(src_js)
          .pipe(jsmin())
          .pipe(rename({suffix: '.min'}))
          .pipe(gulp.dest('./js'))
      });

    //=================== CSS MINIFY ===================
    gulp.task('css-minify', function() {
        console.log('CSS Minify...')
        gulp.src(src_css)
            .pipe(minify_css())
            .pipe(gulp.dest('./css'))
    });

    gulp.task('dev', gulpSequence(['sass-compile'],
        ['sass-watch', 'js-watch']));
    gulp.task('default', ['sass-compile', 'css-minify', 'js-minify']);