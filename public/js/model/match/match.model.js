System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Match;
    return {
        setters:[],
        execute: function() {
            Match = (function () {
                function Match(opponent) {
                    this.opponent = opponent;
                    this.won = false;
                }
                Match.prototype.addOpponent = function (opponent) {
                    if (this.size() > 1) {
                        console.log('Cannot add more than two players');
                        return;
                    }
                    if (this.size() > 0 && this.opponent[0].getPlayer() === opponent.getPlayer()) {
                        console.log('Cannot add same player twice');
                        return;
                    }
                    this.opponent.push(opponent);
                };
                Match.prototype.getOpponent = function (index) {
                    return this.opponent[index];
                };
                Match.prototype.size = function () {
                    return this.opponent.length;
                };
                return Match;
            }());
            exports_1("Match", Match);
        }
    }
});
//# sourceMappingURL=match.model.js.map