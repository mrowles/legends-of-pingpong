System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Error;
    return {
        setters:[],
        execute: function() {
            Error = (function () {
                function Error(message) {
                    this.message = message;
                }
                return Error;
            }());
            exports_1("Error", Error);
        }
    }
});
//# sourceMappingURL=error.js.map