System.register([], function(exports_1) {
    var Player;
    return {
        setters:[],
        execute: function() {
            Player = (function () {
                function Player(id, name, email) {
                    this.id = id;
                    this.name = name;
                    this.email = email;
                }
                return Player;
            })();
            exports_1("Player", Player);
        }
    }
});
//# sourceMappingURL=player.model.js.map