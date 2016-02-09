var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); //mongo connection
var bodyParser = require('body-parser'); //parses information from POST
var methodOverride = require('method-override'); //used to manipulate POST



router.post('/:username', function(req, res, next) {

    console.log(req);
    req.get();

    res.send('respond for ' + req.params.username);
});


router.get('/all', function(req, res, next) {
        Player.find({}, function(err, players) {
        var playersList = {};

        players.forEach(function(player) {
            playersList[player._id] = player;
        });
        res.send(playersList);
    });
    res.send('respond for ' + req.params.username);

});

module.exports = router;

