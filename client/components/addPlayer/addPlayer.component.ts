import {Component} from 'angular2/core'
import {NgForm} from 'angular2/common';
import {BaseRequestOptions, Http, HTTP_PROVIDERS} from 'angular2/http';
import {Player} from '../../model/player/player.model';

@Component({
    selector: 'add-player-form',
    viewProviders: [HTTP_PROVIDERS],
    templateUrl: '/client/components/addPlayer/addPlayer.html'
})

export class AddPlayerComponent {
    model = new Player(1, 'John', 'john@gmail.com');
    submitted = false;
    response = {};
    http:Http;

    constructor(http:Http) {
        this.http = http;
    }

    onSubmit() {

        //this.http.get('/api/users')
        this.http.get('/players/all')
            .subscribe(response => this.response = response);

        this.submitted = true;
    }

    get diagnostic() {
        console.log(2, this.response);
        return JSON.stringify(this.response);

    }

}
