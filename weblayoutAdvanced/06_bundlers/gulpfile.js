const { src, dest, series, watch } = require('gulp')
const concat = require('gulp-concat')
const htmlMin = require('gulp-htmlmin')
const cleanCSS = require('gulp-clean-css')
const autoprefixer = require('gulp-autoprefixer')
const uglify = require('gulp-uglify-es').default
const browserSync = require('browser-sync').create()
const babel = require('gulp-babel')
const image = require('gulp-imagemin')
const svgSprite = require('gulp-svg-sprite')
const notify = require('gulp-notify')
const sourcemaps = require('gulp-sourcemaps')
const del = require('del')
const gulpif = require('gulp-if')
const argv = require('yargs').argv

const yargs = require('yargs')
const build = yargs.argv.prod

const cleaner = () => {
    return del(['dist'])
}

const styles = () => {
    return src('src/styles/**/*.css')
        .pipe(gulpif(!build, sourcemaps.init()))
        .pipe(concat('main.css'))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulpif(build, cleanCSS({
            level: 2
        })))
        .pipe(gulpif(!build, sourcemaps.write()))
        .pipe(dest('dist'))
        .pipe(browserSync.stream())
}
const resources = () => {
    return src('src/resources/**')
        .pipe(dest('dist'))
}

const htmlMinify = () => {
    return src('src/**/*.html')
        .pipe(gulpif(build, htmlMin({
            collapseWhitespace: true,
        })))
        .pipe(dest('dist'))
        .pipe(browserSync.stream())
}

const svgSprites = () => {
    return src('src/images/svg/**/*.svg')
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: '../sprite.svg'
                }
            }
        }))
        .pipe(dest('dist/images'))
}

const scripts = () => {
    return src([
        'src/js/components/**/*.js',
        'src/js/main.js'
    ])
        .pipe(gulpif(!build, sourcemaps.init()))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('app.js'))
        .pipe(gulpif(build, uglify().on('error', notify.onError())))
        .pipe(gulpif(!build, sourcemaps.write()))
        .pipe(dest('dist'))
        .pipe(browserSync.stream())
}

const images = () => {
    return src([
        'src/images/**/*.jpg',
        'src/images/**/*.jpeg',
        'src/images/**/*.png',
        'src/images/*.svg'
    ])
        .pipe(image())
        .pipe(dest('dist/images'))
}

const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    })
}

watch('src/**/*.html', htmlMinify)
watch('src/styles/**/*.css', styles)
watch('src/images/svg/**/*.svg', svgSprites)
watch('src/js/**/*.js', scripts)
watch('src/resources/**', resources)

exports.cleaner = cleaner
exports.styles = styles
exports.scripts = scripts
exports.htmlMinify = htmlMinify
exports.default = series(cleaner, resources, htmlMinify, scripts, styles, images, svgSprites, watchFiles)
exports.dev = series(cleaner, resources, scripts, styles, images, svgSprites, watchFiles)
exports.build = series(cleaner, resources, htmlMinify, scripts, styles, images, svgSprites, watchFiles)