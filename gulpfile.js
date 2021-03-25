const {src,dest,series} = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require ('gulp-uglify-es').default;
const image = require('gulp-image')
const destino = "build"; //"www";

sass.compiler = require('dart-sass');

function js(){
    return src("./js/**/*.js")
        .pipe(concat("main.min.js"))
        .pipe(uglify())
        .pipe(dest(`./${destino}/js`));
    }

function css(){
    return src("./sass/**/*.scss")
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(rename('estilo.min.css'))
        .pipe(dest(`./${destino}/css`));
}

function images(){
	return src('./imgs/**/*')
	.pipe(image())
	.pipe(dest(`./${destino}/imgs`));
}

function mover_css(){
	return src('./css/**/*')
	.pipe(dest(`./${destino}/css`));
}

function mover_js(){
	return src('./js/**/*')
	.pipe(dest(`./${destino}/js`));
}

function mover_html(){
	return src('./index.html')
	.pipe(dest(`./${destino}`));
}

function mover_images(){
	return src('./imgs/**/*')
	.pipe(dest(`./${destino}/imgs`));
}

exports.js = js;
exports.css = css;
exports.images = images;
exports.release = series(css,js,images,mover_css,mover_js,mover_html);
exports.build = series(css,js,mover_css,mover_js,mover_html,mover_images);

exports.default = ()=>{};