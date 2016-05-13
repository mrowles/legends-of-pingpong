System.register([], function(exports_1) {
    var Set;
    return {
        setters:[],
        execute: function() {
            Set = (function () {
                function Set(score, won) {
                    this.score = score;
                    this.won = won;
                }
                Set.prototype.getScore = function () {
                    return this.score;
                };
                Set.prototype.setWon = function (won) {
                    this.won = won;
                };
                Set.prototype.isWon = function () {
                    return this.won;
                };
                return Set;
            })();
            exports_1("Set", Set);
        }
    }
});
//# sourceMappingURL=set.model.js.map