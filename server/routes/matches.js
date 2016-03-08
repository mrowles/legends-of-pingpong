var express = require('express');
var router = express.Router();
var Match = require('../model/match');

router.post('', function (req, res) {

  var match = new Match(req.body);
  match.players = req.body.players;

  match.save(function (err) {

    if (err) {
      res.status(504).json(err);
      return;
    }

    res.status(202).json({message: 'match created'});

  });

});

module.exports = router;
