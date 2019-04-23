const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-dart-sass');

const stylesConfig = {
  includePaths: ['node_modules'],
  outputStyle: 'compressed'
};

exports.buildSiteStyles = () => {
  return src('site/styles/site.scss')
    .pipe(sass(stylesConfig).on('error', sass.logError))
    .pipe(dest('static'));
};

exports.watchSiteStyles = () => {
  return watch(
    ['site/styles/site.scss', 'lib/styles/**/*'],
    exports.buildSiteStyles
  );
};

exports.default = series(exports.buildSiteStyles, exports.watchSiteStyles);
