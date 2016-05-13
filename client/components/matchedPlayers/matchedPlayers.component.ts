import {Component} from '@angular/core';

import {Match} from 'model/match/match.model';
import {MatchService} from 'service/match.service';

@Component({
  selector: 'matched-players',
  templateUrl: 'public/js/components/matchedPlayers/matchedPlayers.html',
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
}
