import {Player} from '../player/player.model';
import {Set} from './set.model';

export class Opponent {
  private player: Player;
  private sets: Array<Set>;
  private won: boolean;

  constructor(player: Player) {
    this.player = player;
    this.sets = [new Set(0, false), new Set(0, false), new Set(0, false)];
    this.won = false;
  }

  public getPlayer(): Player {
    return this.player;
  }

  public setPlayer(player: Player): void {
    this.player = player;
  }

  public getSet(index: number): Set {
    return this.sets[index];
  }

  public getWon(): boolean {
    return this.won;
  }

  public setWon(won: boolean): void {
    this.won = won;
  }

  public getWins(): number {
    let numberOfWins: number = 0;

    for (let set of this.sets) {
      if (set.isWon()) {
        numberOfWins++;
      }
    }

    return numberOfWins;
  }
}
