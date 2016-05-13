import {Component} from '@angular/core';
import {Http, HTTP_PROVIDERS, Headers, Response} from '@angular/http';
import {Router}  from '@angular/router-deprecated';

import {Error} from 'model/error/error';
import {Player} from 'model/player/player.model';
import {PlayerService} from 'service/player.service';
import 'rxjs/Rx';

@Component({
  providers: [HTTP_PROVIDERS],
  selector: 'add-player-form',
  templateUrl: 'public/js/components/addPlayer/addPlayer.html',
})

export class AddPlayerComponent {
  private model: Player = new Player(1, '', '');
  public error: Error = new Error('');
  private http: Http;
  private router: Router;
  private playerService: PlayerService;

  constructor(http: Http, router: Router, playerService: PlayerService) {
    this.http = http;
    this.router = router;
    this.playerService = playerService;
  }

  public onSubmit(): void {
    let json: string = JSON.stringify(this.model);
    let headers: Headers = new Headers();

    headers.append('Content-Type', 'application/json');

    this.http.post('/api/player', json, {
      headers: headers,
    }).subscribe(
      (response: Response) => this.onSuccess(),
      (response: Response) => this.onError(response)
    );

  }

  public onSuccess(): void {
    this.playerService.setLastAddedPlayer(this.model);
    this.router.navigate(['CreateMatch']);
  }

  public onError(response: Response): void {
    this.error.message = JSON.stringify(response.json().errors);
  }

}
