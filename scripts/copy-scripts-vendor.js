var copy = require('recursive-copy');

var options = {
  overwrite: true,
  expand: true,
  dot: true,
  junk: true,
  filter: [
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap/dist/css/bootstrap.min.css.map',
    'es6-shim/es6-shim.js',
    'systemjs/dist/system-polyfills.js',
    'systemjs/dist/system-polyfills.js.map',
    'systemjs/dist/system.src.js',
    'rxjs/bundles/Rx.js',
    'angular2/**/*.*'
  ]
};

copy('./node_modules', './public/node_modules', options)
  .on(copy.events.COPY_FILE_START, function (copyOperation) {
    console.info('Copying file ' + copyOperation.src + '...');
  })
  .then(function (results) {
    console.info(results.length + ' file(s) copied');
  })
  .catch(function (error) {
    return console.error('Copy failed: ' + error);
  });
