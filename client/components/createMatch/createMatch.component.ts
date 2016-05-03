import {Component, OnInit} from '@angular/core';
import {SelectPlayersComponent} from '../selectPlayers/selectPlayers.component';
import {PlayerService} from '../../service/player.service';
import {MatchService} from '../../service/match.service';
import {Player} from '../../model/player/player.model';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {MatchedPlayersComponent} from '../matchedPlayers/matchedPlayers.component';

@Component({
  directives: [SelectPlayersComponent, MatchedPlayersComponent, ROUTER_DIRECTIVES],
  templateUrl: './createMatch.html',
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
