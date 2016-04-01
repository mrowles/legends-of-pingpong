import {Injectable} from 'angular2/core';
import {Match} from '../model/player/match.model';
import {Player} from '../model/player/player.model';

@Injectable()
export class MatchService {

  private match: Match;

  constructor() {
    this.match = new Match(1, undefined, undefined);
  }

  public addPlayer(player: Player): void {
    if (this.match.player1 === undefined) {
      this.match.player1 = player;
    } else if (this.match.player2 === undefined) {
      this.match.player2 = player;
    }
  }

  public getMatch(): Match {
    return this.match;
  }

  public isMatchReady(): Boolean {
    return this.match.player1 !== undefined && this.match.player2 !== undefined;
  }

}
