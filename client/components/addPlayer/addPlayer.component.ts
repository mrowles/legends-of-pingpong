import {Component} from 'angular2/core'
import {NgForm} from 'angular2/common';
import {BaseRequestOptions, Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import {Player} from '../../model/player/player.model';
import {PlayerService} from '../../service/player.service';
import 'rxjs/Rx';
import {Router, RouterLink} from 'angular2/router';

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
  router:Router;

  constructor(http:Http, router: Router, private _playerService: PlayerService) {
    this.http = http;
    this.router = router;
  }


  onSubmit() {
    let json = JSON.stringify(this.model);
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');


    this.http.post('/api/player', json, {
      headers: headers
    }).subscribe(
      res => this.onSuccess(),
      res => this.postResponse = res.json()
    );

  }

  get message() {
    return JSON.stringify(this.postResponse);
  }

  onSuccess() {
    this._playerService.setLastAddedPlayer(this.model);
    this.router.navigate(['StartNewMatch']);
  }

}
