var copy = require('recursive-copy');

var options = {
  overwrite: true,
  expand: true,
  dot: true,
  junk: true,
  filter: [
    '**/*.js',
    '**/*.js.map',
    '**/*.html'
  ]
};

copy('./client', './public/js', options)
  .on(copy.events.COPY_FILE_START, function (copyOperation) {
    console.info('Copying file ' + copyOperation.src + '...');
  })
  .then(function (results) {
    console.info(results.length + ' file(s) copied');
  })
  .catch(function (error) {
    return console.error('Copy failed: ' + error);
  });
