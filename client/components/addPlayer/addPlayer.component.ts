import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import {Player} from '../../model/player/player.model';
import {PlayerService} from '../../service/player.service';
import 'rxjs/Rx';
import {Router} from 'angular2/router';

@Component({
  providers: [HTTP_PROVIDERS],
  selector: 'add-player-form',
  templateUrl: '/client/components/addPlayer/addPlayer.html',
})

export class AddPlayerComponent {
  private model:Player = new Player(1, '', '');
  private postResponse:Object;
  private http:Http;
  private router:Router;
  private playerService:PlayerService;

  constructor(http:Http, router:Router, playerService:PlayerService) {
    this.http = http;
    this.router = router;
    this.playerService = playerService;
  }

  public onSubmit():void {
    let json:string = JSON.stringify(this.model);
    let headers:Headers = new Headers();

    headers.append('Content-Type', 'application/json');

    this.http.post('/api/player', json, {
      headers: headers,
    }).subscribe(
      res => this.onSuccess(),
      res => this.postResponse = res.json()
    );

  }

  public onSuccess():void {
    this.playerService.setLastAddedPlayer(this.model);
    this.router.navigate(['StartNewMatch']);
  }

}
