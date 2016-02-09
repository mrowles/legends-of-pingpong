System.register([], function(exports_1) {
    var Player;
    return {
        setters:[],
        execute: function() {
            Player = (function () {
                function Player(id, firstname, lastname, email) {
                    this.id = id;
                    this.firstname = firstname;
                    this.lastname = lastname;
                    this.email = email;
                }
                return Player;
            })();
            exports_1("Player", Player);
        }
    }
});
//# sourceMappingURL=player.model.js.map