/* global requirements */
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');

sass.compiler = require('node-sass');

/* change your directory and settings here */
const settings = {
    publicDir: '.',
    srcDir: './src',
    sassDir: './src/sass',
    distDir: './dist',
    cssDir: '/css',
    jsDir: '/js'
};

/**
 * serve task that will do the following things:
 * - launch browserSync plus index.html 
 * - watch the changes for html, css and js files in the source directory
 * - compile sass to your distribution directory
 * - create sourcemaps
 **/
gulp.task('serve', function() {

    /**
     * Launch BrowserSync from publicDir
     */
    browserSync.init({
        server: settings.publicDir,
        // index: "index.html", /* index.html is standard and could be changed to "whatever.html" */
        browser: "google chrome",
        notify: true,
        injectChanges: false
    });

    /**
     * watch for changes in html and css files
     */
    gulp.watch([
        settings.publicDir + "/**/*.html",
        settings.cssDir + "/**/*.css",
        settings.jsDir + "/**/*.js",
        ])
    .on('change', browserSync.reload);

});

// compile sass files
gulp.task('sass', function() {
    return gulp.src(settings.sassDir + '/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('./maps'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(settings.distDir + settings.cssDir));
});

/**
 * Default task: running just `gulp` will compile the sass,
 * compile the site, launch BrowserSync then watch
 * files for changes
 */
gulp.task('default', gulp.series('serve'));