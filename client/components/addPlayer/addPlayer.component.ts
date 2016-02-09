import {Component} from 'angular2/core'
import {NgForm} from 'angular2/common';
import {BaseRequestOptions, Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import {Player} from '../../model/player/player.model';
import 'rxjs/Rx';

@Component({
    selector: 'add-player-form',
    providers: [HTTP_PROVIDERS],
    templateUrl: '/client/components/addPlayer/addPlayer.html'
})

export class AddPlayerComponent {
    model = new Player(1, 'John', 'Test', 'john@gmail.com');
    submitted = false;
    response = {};
  postResponse;
    http:Http;

    constructor(http:Http) {
        this.http = http;
    }

    onSubmit() {

      console.log('Submit', this.model);

      var json = JSON.stringify(this.model);
      console.log('Submit json', json);

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post('/player', json, {
        headers: headers
      }).map(res => res.json()).subscribe(
        res => console.log('in subscribe submitted', res),
        res => this.postResponse = res.json(),
        () => this.submitted = true
      );

      //this.http.get('/player/all')
      //  .subscribe(response => this.response = response.json());
  }
}
