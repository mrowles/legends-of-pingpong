import {Injectable} from 'angular2/core';
import {Match} from '../model/match/match.model';
import {Player} from '../model/player/player.model';

@Injectable()
export class MatchService {

  private match: Match;

  constructor() {
    this.match = new Match([], false, []);
  }

  public getMatch(): Match {
    return this.match;
  }

  public addPlayer(player: Player): void {
    this.match.addPlayer(player);
  }

  public isMatchReady(): Boolean {
    return this.match.getPlayer(0) !== undefined && this.match.getPlayer(1) !== undefined;
  }

}
