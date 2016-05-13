import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES}  from '@angular/router-deprecated';

import {SelectPlayersComponent} from 'components/selectPlayers/selectPlayers.component';
import {MatchedPlayersComponent} from 'components/matchedPlayers/matchedPlayers.component';
import {PlayerService} from 'service/player.service';
import {MatchService} from 'service/match.service';
import {Player} from 'model/player/player.model';

@Component({
  directives: [SelectPlayersComponent, MatchedPlayersComponent, ROUTER_DIRECTIVES],
  templateUrl: 'public/js/components/createMatch/createMatch.html',
})
export class CreateMatchPage implements OnInit {
  private lastAddedPlayer: Player;
  private playerService: PlayerService;
  private matchService: MatchService;

  constructor(playerService: PlayerService, matchService: MatchService) {
    this.playerService = playerService;
    this.matchService = matchService;
  }

  public ngOnInit(): void {
    console.log('CREATE MATCH');
    this.lastAddedPlayer = this.playerService.getLastAddedPlayer();
    this.playerService.clearLastAddedPlayer();
  }
}
