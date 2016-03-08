import {Component, OnInit} from 'angular2/core';
import {NgSwitch, NgSwitchWhen, NgSwitchDefault} from 'angular2/src/common/directives';
import {Player} from '../../model/player/player.model';
import {Match} from '../../model/player/match.model';
import {MatchService} from '../../service/match.service';

@Component({
  selector: 'matched-players',
  templateUrl: '/client/components/matchedPlayers/matchedPlayers.html'

})

export class MatchedPlayersComponent {
  match:Match;

  constructor(private _matchService:MatchService) {
    this.match = this._matchService.getMatch();
  }

}
