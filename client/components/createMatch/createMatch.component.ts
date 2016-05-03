import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES}  from '@angular/router-deprecated';

import {SelectPlayersComponent} from 'js/components/selectPlayers/selectPlayers.component';
import {MatchedPlayersComponent} from 'js/components/matchedPlayers/matchedPlayers.component';
import {PlayerService} from 'js/service/player.service';
import {MatchService} from 'js/service/match.service';
import {Player} from 'js/model/player/player.model';

@Component({
  directives: [SelectPlayersComponent, MatchedPlayersComponent, ROUTER_DIRECTIVES],
  templateUrl: 'js/components/createMatch/createMatch.html',
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
