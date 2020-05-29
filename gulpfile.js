/* global requirements */
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

sass.compiler = require('node-sass');

/* change your directory and settings here */
const settings = {
    publicDir: '.',
    srcDir: './src',
    sassDir: './src/sass',
    distDir: './dist',
    cssDir: '/css',
    jsDir: '/js',
    imgDir: '/img'
};
 
// launch browsersync, watch for sass changes
gulp.task('bs', function() {

    /**
     * Launch BrowserSync from publicDir
     */
    browserSync.init({
        server: settings.publicDir,
        // index: "index.html", /* index.html is standard and could be changed to "whatever.html" */
        browser: "google chrome",
        notify: true,
        injectChanges: false,
        files: [settings.distDir + "/**/*.css", settings.distDir + "js/*.js", "*.html"],
    });
    gulp.watch(settings.sassDir + '/**/*.scss', gulp.series('sass')); // run the sass-task (see below) on .scss filechanges 

});

// compile sass files
gulp.task('sass', function() {
    return gulp.src(settings.sassDir + '/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(settings.distDir + settings.cssDir))
        .pipe(browserSync.stream());
});

// copy assets (scripts, images, fonts etc.)
gulp.task('copyassets', function(done) {
    gulp.src([settings.srcDir + settings.jsDir + '/**/*'])
        .pipe(gulp.dest(settings.distDir + settings.jsDir));
        done() //callback for Gulp4
});

/**
 * serve task that will do the following things:
 * - launch browserSync plus index.html 
 * - watch for changes of html, css and js files in the source directory
 * - watch for changes of .scss-files and compile sass to your distribution directory
 **/

gulp.task('serve', gulp.series('sass', 'copyassets', 'bs', function() {
}));