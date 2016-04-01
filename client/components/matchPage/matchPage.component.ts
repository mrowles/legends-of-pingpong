import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Match} from '../../model/match/match.model';
import {PlayerService} from '../../service/player.service';
import {MatchService} from '../../service/match.service';

@Component({
  directives: [ROUTER_DIRECTIVES],
  templateUrl: '/client/components/matchPage/matchPage.html',
})

export class MatchPage implements OnInit {
  private playerService: PlayerService;
  private matchService: MatchService;
  private match: Match;

  constructor(playerService: PlayerService, matchService: MatchService) {
    this.playerService = playerService;
    this.matchService = matchService;
    this.match = this.matchService.getMatch();
  }

  public ngOnInit(): void {
    console.log(1, this.matchService);
    console.log(2, this.match);
  }
}
