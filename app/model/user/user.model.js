System.register([], function(exports_1) {
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User(id, name, email) {
                    this.id = id;
                    this.name = name;
                    this.email = email;
                }
                return User;
            })();
            exports_1("User", User);
        }
    }
});
//# sourceMappingURL=user.model.js.map