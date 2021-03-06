var express = require('express');
var router = express.Router();
var Player = require('../model/player');

router.post('', function (req, res) {

  var player = new Player();
  player.name = req.body.name;
  player.email = req.body.email;

  player.save(function (err) {

    if (err) {
      res.status(504).json(err);
      return;
    }

    res.status(202).json({message: 'player created'});

  });

});

router.get('/all', function (req, res) {

  Player.find({})
    .select('_id name')
    .then(function (err, players) {

      if (err) {
        res.json(err);
        return;
      }

      var playersList = [];

      players.forEach(function (player) {
        playersList.push(player);
      });

      res.json(playersList);
    });

});

router.get('/leaderboard', function (req, res) {

  Player.find({})
    .select('name playerStats')
    .sort([['playerStats.matchWon', -1], ['playerStats.setsWon', -1], ['playerStats.pointsFor', -1], ['name', 1]])
    .then(function (err, players) {

      if (err) {
        res.json(err);
        return;
      }

      var playersList = [];

      players.forEach(function (player) {
        playersList.push(player);
      });

      res.json(playersList);
    });

});

module.exports = router;
