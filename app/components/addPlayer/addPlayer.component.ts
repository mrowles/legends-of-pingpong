import {Component} from 'angular2/core'
import {NgForm} from 'angular2/common';
import {BaseRequestOptions, Http, HTTP_PROVIDERS} from 'angular2/http';
import {User} from '../../model/user/user.model';

@Component({
    selector: 'add-player-form',
    viewProviders: [HTTP_PROVIDERS],
    templateUrl: '/app/components/addPlayer/addPlayer.html'
})

export class AddPlayerComponent {
    model = new User(1, 'John', 'john@gmail.com');
    submitted = false;
    response = {};
    http:Http;

    constructor(http:Http) {
        this.http = http;
    }

    onSubmit() {

        this.http.get('/api/users')
            .subscribe(response => this.response = response);

        this.submitted = true;
    }

    get diagnostic() {
        console.log(2, this.response);
        return JSON.stringify(this.response);

    }

}