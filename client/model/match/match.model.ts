import {Player} from '../../model/player/player.model';
import {Set} from '../../model/match/set.model';

export class Match {
  private players: Array<Player>;
  private won: boolean;
  private sets: Array<Set>;

  constructor(players: Array<Player>, won: boolean, sets: Array<Set>) {
    this.players = players;
    this.won = won;
    this.sets = sets;
  }

  public getPlayer(index: number): Player {
    return this.players[index];
  }

  public addPlayer(player: Player): void {
    if (this.players.length > 1) {
      return;
    }

    this.players.push(player);
  }
}
