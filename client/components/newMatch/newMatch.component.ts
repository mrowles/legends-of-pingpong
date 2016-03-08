import {Component} from 'angular2/core';
import {SelectPlayersComponent} from '../selectPlayers/selectPlayers.component';
import {MatchedPlayersComponent} from '../matchedPlayers/matchedPlayers.component';

@Component({
  directives: [SelectPlayersComponent, MatchedPlayersComponent],
  templateUrl: '/client/components/newMatch/newMatch.html'
})

export class NewMatchPage {}
