import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {SelectPlayersComponent} from '../selectPlayers/selectPlayers.component';

@Component({
  directives: [ROUTER_DIRECTIVES, SelectPlayersComponent],
  templateUrl: '/client/components/newMatch/newMatch.html'
})

export class NewMatchPage {}
