import {Component, OnInit} from '@angular/core';

import {Match} from '../../model/match/match.model';
import {MatchService} from '../../service/match.service';


@Component({
  selector: 'matched-players',
  template: require('./matchedPlayers.html'),
})

export class MatchedPlayersComponent {
  private match: Match;
  private matchService: MatchService;

  constructor(matchService: MatchService) {
    this.matchService = matchService;
    this.match = this.matchService.getMatch();
  }

  public removeOpponent(opponentNumber: number): void {
    this.match.removeOpponent(opponentNumber);
  }

  public ngOnInit(): void {
    this.match = this.matchService.getMatch();
  }
}
