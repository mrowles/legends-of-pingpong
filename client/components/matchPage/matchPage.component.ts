import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Router}  from '@angular/router-deprecated';
import {Http, HTTP_PROVIDERS, Headers, Response} from '@angular/http';

import {Match} from 'model/match/match.model';
import {PlayerService} from 'service/player.service';
import {MatchService} from 'service/match.service';
import {MatchedPlayersComponent} from 'components/matchedPlayers/matchedPlayers.component';
import 'rxjs/Rx';

@Component({
  directives: [MatchedPlayersComponent, ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS],
  templateUrl: 'public/js/components/matchPage/matchPage.html',
})

export class MatchPage {
  private http: Http;
  private router: Router;
  private postResponse: Response;

  private playerService: PlayerService;
  private matchService: MatchService;
  private match: Match;

  private playerOneWins: number;
  private playerTwoWins: number;

  private isMatchFinished: boolean = false;

  constructor(playerService: PlayerService, matchService: MatchService, http: Http, router: Router) {
    this.playerService = playerService;
    this.matchService = matchService;
    this.match = this.matchService.getMatch();
    this.http = http;
    this.router = router;

  }

  public checkMatchFinished(): void {
    if (this.match.getOpponent(0).getWon() || this.match.getOpponent(1).getWon()) {
      this.isMatchFinished = true;
    }
  }

  public setScoreUpdated(setIndex: number): void {

    let playerOneScore: number = this.match.getOpponent(0).getSet(setIndex).getScore();
    let playerTwoScore: number = this.match.getOpponent(1).getSet(setIndex).getScore();

    // don't do win unless scores appropriate
    if ((playerOneScore + playerTwoScore) < 11) {
      return;
    }

    // have to win by 2 at tie break
    if (playerOneScore >= 10 && playerTwoScore >= 10) {

      if (playerOneScore >= playerTwoScore && playerOneScore - playerTwoScore < 2) {
        return;
      } else if (playerTwoScore >= playerOneScore && playerTwoScore - playerOneScore < 2) {
        return;
      }

    }

    // set who won the set
    if (playerOneScore > playerTwoScore) {
      this.match.getOpponent(0).getSet(setIndex).setWon(true);
      this.match.getOpponent(1).getSet(setIndex).setWon(false);
    } else {
      this.match.getOpponent(0).getSet(setIndex).setWon(false);
      this.match.getOpponent(1).getSet(setIndex).setWon(true);
    }

    this.playerOneWins = this.match.getOpponent(0).getWins();
    this.playerTwoWins = this.match.getOpponent(1).getWins();

    if ((this.playerOneWins + this.playerTwoWins) === 3) {
      if (this.playerOneWins >= 2) {
        this.match.getOpponent(0).setWon(true);
        this.match.getOpponent(1).setWon(false);
      } else {
        this.match.getOpponent(0).setWon(false);
        this.match.getOpponent(1).setWon(true);
      }
    }

    this.checkMatchFinished();

  }

  public onSubmit(): void {

    let json: string = JSON.stringify(this.match);

    let headers: Headers = new Headers();

    headers.append('Content-Type', 'application/json');

    this.http.post('/api/match', json, {
      headers: headers,
    }).subscribe(
      (response: Response) => this.onSuccess(),
      (response: Response) => this.postResponse = response.json()
    );
  }

  public onSuccess(): void {
    this.router.navigate(['Home']);
    console.log('SUCCESS');
  }
}
