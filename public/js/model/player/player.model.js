System.register(['./playerStats'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var playerStats_1;
    var Player;
    return {
        setters:[
            function (playerStats_1_1) {
                playerStats_1 = playerStats_1_1;
            }],
        execute: function() {
            Player = (function () {
                function Player(id, name, email) {
                    this.id = id;
                    this.name = name;
                    this.email = email;
                    this.playerStats = new playerStats_1.PlayerStats();
                    this.playerStats.win = 0;
                    this.playerStats.loss = 0;
                    this.playerStats.forfeit = 0;
                    this.playerStats.for = 0;
                    this.playerStats.against = 0;
                }
                return Player;
            }());
            exports_1("Player", Player);
        }
    }
});
//# sourceMappingURL=player.model.js.map