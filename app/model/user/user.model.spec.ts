import {User} from './user.model';

describe('User model', function() {
    it('has the id given in the constructor', function() {
        var user = new User(1, 'Name', 'Email');
        expect(user.id).toEqual(1);
    });
    it('has name given in the constructor', function() {
        var user = new User(1, 'Name', 'Email');
        expect(user.name).toEqual('Name');
    });
    it('has an email given in the constructor', function() {
        var user = new User(1, 'Name', 'Email');
        expect(user.email).toEqual('Email');
    });
});
