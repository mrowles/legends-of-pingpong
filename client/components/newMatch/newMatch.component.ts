import {Component} from 'angular2/core';
import {SelectPlayersComponent} from '../selectPlayers/selectPlayers.component';

@Component({
  directives: [SelectPlayersComponent],
  templateUrl: '/client/components/newMatch/newMatch.html'
})

export class NewMatchPage {}
