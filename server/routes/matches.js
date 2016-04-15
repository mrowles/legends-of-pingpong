var express = require('express');
var _ = require('underscore');
var router = express.Router();
var Match = require('../model/match');
var Player = require('../model/player');

router.post('', function (req, res) {

  var match = new Match(req.body);

  match.save(function (err) {

    if (err) {
      res.status(504).json(err);
      return;
    }

    updatePlayerStats(match.opponent[0], match.opponent[1]);

    res.status(202).json({message: 'match created'});

  });

});

function updatePlayerStats(opponent1, opponent2) {

  var player1PointsFor = _.reduce(opponent1.sets, function (total, aSet) {
    return total + aSet.score;
  }, 0);

  var player2PointsFor = _.reduce(opponent2.sets, function (total, aSet) {
    return total + aSet.score;
  }, 0);

  var player1SetsWon = _.reduce(opponent1.sets, function (total, aSet) {
    return total + (aSet.won ? 1 : 0);
  }, 0);

  var player2SetsWon = 3 - player1SetsWon;

  var player1MatchWon = opponent1.won ? 1 : 0;
  var player2MatchWon = opponent2.won ? 1 : 0;

  var response = {};

  Player.update({_id: opponent1.player}, {
    $inc: {
      'playerStats.matchWon': player1MatchWon,
      'playerStats.matchLost': player2MatchWon,
      'playerStats.setsWon': player1SetsWon,
      'playerStats.setsLost': player2SetsWon,
      'playerStats.pointsFor': player1PointsFor,
      'playerStats.pointsAgainst': player2PointsFor
    }
  }, function (err) {
    if (err) {
      console.error('Error updating player 1 stats: ', err);
      response.err = err;
      response.status = false;
      return response;
    }

    response.status = true;
  });

  Player.update({_id: opponent2.player}, {
    $inc: {
      'playerStats.matchWon': player2MatchWon,
      'playerStats.matchLost': player1MatchWon,
      'playerStats.setsWon': player2SetsWon,
      'playerStats.setsLost': player1SetsWon,
      'playerStats.pointsFor': player2PointsFor,
      'playerStats.pointsAgainst': player1PointsFor
    }
  }, function (err) {
    if (err) {
      console.error('Error updating player 2 stats: ', err);
      response.err = err;
      response.status = false;
      return response;
    }

    response.status = true;
  });

  return response;

}
module.exports = router;
