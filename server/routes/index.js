var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function (req, res) {
  console.log(__dirname);
  console.log(path.join(__dirname, '/public'));
  res.sendFile('index.html', {root: '/app/public/'});
});

module.exports = router;
