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
  model = new Player(1, '', '');
  submitted = false;
  response = {};
  postResponse;
  http:Http;

  constructor(http:Http) {
    this.http = http;
  }

  onSubmit() {
    let json = JSON.stringify(this.model);
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    this.http.post('/api/player', json, {
      headers: headers
    }).map(res => res.json()).subscribe(
      res => this.postResponse = res
    );
  }

  get message() {
    return JSON.stringify(this.postResponse);
  }
}
