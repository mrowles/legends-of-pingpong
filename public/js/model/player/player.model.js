System.register(['model/player/playerStats.model'], function(exports_1) {
    var playerStats_model_1;
    var Player;
    return {
        setters:[
            function (playerStats_model_1_1) {
                playerStats_model_1 = playerStats_model_1_1;
            }],
        execute: function() {
            Player = (function () {
                function Player(id, name, email) {
                    this.id = id;
                    this.name = name;
                    this.email = email;
                    this.playerStats = new playerStats_model_1.PlayerStats();
                    this.playerStats.win = 0;
                    this.playerStats.loss = 0;
                    this.playerStats.forfeit = 0;
                    this.playerStats.for = 0;
                    this.playerStats.against = 0;
                }
                return Player;
            })();
            exports_1("Player", Player);
        }
    }
});
//# sourceMappingURL=player.model.js.map