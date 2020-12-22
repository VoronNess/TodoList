const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemap = require('gulp-sourcemaps');
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sync = require('browser-sync').create();
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const del = require('del');
const babel = require('gulp-babel');

// Styles
const styles = () => gulp.src('source/less/style.less')
	.pipe(plumber())
	.pipe(sourcemap.init())
	.pipe(less())
	.pipe(postcss([
		autoprefixer(),
	]))
	.pipe(csso())
	.pipe(rename('styles.min.css'))
	.pipe(sourcemap.write('.'))
	.pipe(gulp.dest('build/css'))
	.pipe(sync.stream());

exports.styles = styles;

const stylesCopy = () => gulp.src('source/less/style.less')
	.pipe(plumber())
	.pipe(sourcemap.init())
	.pipe(less())
	.pipe(postcss([
		autoprefixer(),
	]))
	.pipe(sourcemap.write('.'))
	.pipe(gulp.dest('build/css'))
	.pipe(sync.stream());

exports.stylesCopy = stylesCopy;

// Images
const images = () => gulp.src('source/img/**/*.{png,svg}')
	.pipe(imagemin([
		imagemin.optipng({ optimizationLevel: 3 }),
		imagemin.svgo(),
	]))
	.pipe(gulp.dest('build/img'));

exports.images = images;

// Js-min
const scripts = () => gulp.src('source/js/*.js')
	.pipe(babel({
		presets: ['babel-preset-env'],
	}))
	.pipe(uglify())
	.pipe(rename('script.min.js'))
	.pipe(gulp.dest('build/js'));
exports.scripts = scripts;

// Server
const server = (done) => {
	sync.init({
		server: {
			baseDir: 'source',
		},
		cors: true,
		notify: false,
		ui: false,
	});
	done();
};

exports.server = server;

// Watcher
const watcher = () => {
	gulp.watch('source/less/**/*.less', gulp.series('styles'));
	gulp.watch('source/*.html').on('change', sync.reload);
	gulp.watch('source/*.js').on('change', sync.reload);
};

exports.default = gulp.series(
	styles,
	server,
	watcher,
);

// Del old files
const clean = () => del('build');
exports.clean = clean;

// Copy to build
const copy = () => gulp.src([
	'source/fonts/**/*.{woff,woff2}',
	'source/img/**',
	'source/js/**',
], {
	base: 'source',
})
	.pipe(gulp.dest('build'));
exports.copy = copy;

const html = () => gulp.src('source/*.html', { base: 'source' })
	.pipe(gulp.dest('build'));
exports.html = html;

const htmlMinify = () => gulp.src('source/*.html')
	.pipe(htmlmin({ collapseWhitespace: true }))
	.pipe(gulp.dest('build'));
exports.htmlMinify = htmlMinify;

const build = gulp.series(
	clean,
	copy,
	styles,
	images,
	html,
	stylesCopy,
	scripts,
);
exports.build = build;

const start = gulp.series(
	build,
	server,
	watcher,
);
exports.start = start;
