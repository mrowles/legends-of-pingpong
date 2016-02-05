System.register(['./user.model'], function(exports_1) {
    var user_model_1;
    return {
        setters:[
            function (user_model_1_1) {
                user_model_1 = user_model_1_1;
            }],
        execute: function() {
            describe('User model', function () {
                it('has the id given in the constructor', function () {
                    var user = new user_model_1.User(1, 'Name', 'Email');
                    expect(user.id).toEqual(1);
                });
                it('has name given in the constructor', function () {
                    var user = new user_model_1.User(1, 'Name', 'Email');
                    expect(user.name).toEqual('Name');
                });
                it('has an email given in the constructor', function () {
                    var user = new user_model_1.User(1, 'Name', 'Email');
                    expect(user.email).toEqual('Email');
                });
            });
        }
    }
});
//# sourceMappingURL=user.model.spec.js.map