import {Injectable} from 'angular2/core';
import {Player} from '../model/player/player.model';
import {Match} from '../model/player/match.model';

@Injectable()
export class MatchService {

  match:Match;

  constructor() {
    this.match = new Match(1, undefined, undefined);
  }

  addPlayer(player) {
    if (this.match.playerA === undefined) {
      this.match.playerA = player;
    }
    else if (this.match.playerB === undefined) {
      this.match.playerB = player;
    }
  }

  getMatch() {
    return this.match;
  }

  isMatchReady() {
    return this.match.playerA !== undefined && this.match.playerB !== undefined;
  }

}
