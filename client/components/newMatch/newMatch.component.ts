import {Component} from 'angular2/core';
import {SelectPlayersComponent} from '../selectPlayers/selectPlayers.component';
import {PlayerService} from '../../service/player.service';
import {MatchService} from '../../service/match.service';
import {Player} from '../../model/player/player.model';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {MatchedPlayersComponent} from '../matchedPlayers/matchedPlayers.component';

@Component({
  directives: [SelectPlayersComponent, MatchedPlayersComponent, ROUTER_DIRECTIVES],
  templateUrl: '/client/components/newMatch/newMatch.html'
})
export class NewMatchPage {
  lastAddedPlayer:Player;

  constructor(private _playerService:PlayerService, private _matchService:MatchService) {
  }

  getLastAddedPlayer() {
    this.lastAddedPlayer = this._playerService.getLastAddedPlayer();
    return this.lastAddedPlayer;
  }
}
