const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-dart-sass');
const concat = require('gulp-concat');
const rollup = require('rollup');

const stylesConfig = {
  includePaths: ['node_modules'],
  outputStyle: 'compressed'
};

exports.buildSiteStyles = function buildSiteStyles() {
  return src('site/styles/site.scss')
    .pipe(sass(stylesConfig).on('error', sass.logError))
    .pipe(dest('static'));
};

exports.watchSiteStyles = function watchSiteStyles() {
  return watch(
    ['site/styles/site.scss', 'lib/styles/**/*'],
    exports.buildSiteStyles
  );
};

exports.buildVendorScripts = function buildVendorScripts() {
  return src(['node_modules/clipboard/dist/clipboard.min.js'])
    .pipe(concat('vendor.js'))
    .pipe(dest('static'));
};

exports.buildSiteScripts = function buildSiteScripts() {
  return rollup
    .rollup({
      input: 'site/scripts/site.js',
      external: ['clipboard']
    })
    .then(bundle => {
      return bundle.write({
        file: 'static/site.js',
        format: 'umd',
        globals: {
          clipboard: 'ClipboardJS'
        }
      });
    });
};

exports.watchSiteScripts = function watchSiteScripts() {
  return watch(
    ['site/scripts/**/*', 'lib/scripts/**/*'],
    exports.buildSiteScripts
  );
};

exports.default = parallel(
  series(
    parallel(exports.buildVendorScripts, exports.buildSiteScripts),
    exports.watchSiteScripts
  ),
  series(exports.buildSiteStyles, exports.watchSiteStyles)
);

exports.buildAll = parallel(
  exports.buildVendorScripts,
  exports.buildSiteScripts,
  exports.buildSiteStyles
);
